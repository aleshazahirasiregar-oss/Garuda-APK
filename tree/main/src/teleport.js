// teleport.js
const { getSprite } = require('./sprites');

function teleportSprite(from, to) {
    const fromSprite = getSprite(from);
    const toSprite = getSprite(to);

    console.log(`${fromSprite} ---> 🌀 ---> ${toSprite}`);
    console.log("Sprite teleport berhasil!");
}

module.exports = { teleportSprite };