// index.js
console.log("Halo Kapten Z ⚡! Garuda-APK Node.js siap jalan!");                                                           
// index.js
const readline = require("readline");
const { updateBladder } = require("./bladder");
const { teleportSprite } = require("./teleport");
const { showSprite } = require("./sprites");
const { triggerEvent } = require("./events");

function startGame() {
    let bladder = 0;
    const limit = 100;

    const interval = setInterval(() => {
        bladder = updateBladder(bladder, limit);

        if (bladder >= limit) {
            teleportSprite("bladder_pee", "toilet");
            showSprite("kawan_sus");
            triggerEvent("overflow");
            clearInterval(interval);

            console.log("Game selesai!");
            console.log("👉 Tekan Enter untuk keluar...");

            // Infinity loop: tunggu Enter
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.on("line", () => {
                console.log("Keluar game. Sampai jumpa Kapten Z ⚡!");
                rl.close();
                process.exit(0);
            });
        }
    }, 1000);
}

// Jalankan game
startGame();