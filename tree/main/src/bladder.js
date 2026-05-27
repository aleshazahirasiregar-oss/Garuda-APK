// bladder.js
function updateBladder(bladder, limit = 100) {
    bladder += 10;
    console.log(`Bladder meter: ${bladder}%`);

    if (bladder === 50) {
        console.log("😖 Kamu mulai gelisah...");
    }

    if (bladder >= 80 && bladder < limit) {
        console.log("🚽 Hampir waktunya ke toilet!");
    }

    if (bladder >= limit) {
        console.log("💧👖 Bladder penuh!");
    }

    return bladder;
}

module.exports = { updateBladder };