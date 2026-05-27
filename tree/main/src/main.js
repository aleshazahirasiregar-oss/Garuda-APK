// main.js
const { updateBladder } = require('./bladder');
const { teleportSprite } = require('./teleport');
const { showSprite } = require('./sprites');
const { triggerEvent } = require('./events');

let bladder = 0;
const limit = 100;

const interval = setInterval(() => {
    bladder = updateBladder(bladder, limit);

    if (bladder >= limit) {
        // Teleport ke toilet
        teleportSprite("bladder_pee", "toilet");

        // Kawan sus muncul liatin
        showSprite("kawan_sus");

        triggerEvent("overflow");
        clearInterval(interval);
        console.log("Game selesai!");
    }
}, 1000);