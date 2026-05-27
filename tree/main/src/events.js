// events.js
function triggerEvent(eventName) {
    switch(eventName) {
        case "teleport":
            console.log("✨ Event: Teleport sprite aktif!");
            break;
        case "overflow":
            console.log("💦 Event: Bladder overflow!");
            break;
        default:
            console.log(`📢 Event: ${eventName}`);
    }
}

module.exports = { triggerEvent };