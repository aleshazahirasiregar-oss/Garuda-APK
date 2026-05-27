// sprites.js
const path = require('path');

function getSprite(name) {
    const spritePath = path.join(__dirname, '../assets', name + '.png');
    console.log(`🎨 Load sprite: ${spritePath}`);
    return spritePath;
}

module.exports = { getSprite };