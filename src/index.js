const path = require("path");
const share = require("./share.js");
const assets = require("./assets.js");
const initCommands = require("./commands.js");
const initTimerHook = require("./timerHook.js");
const initInputHook = require("./inputHook.js");
const initService = require("./service.js");

function activate(context) {
    share.PATH_GLOBAL = context.globalStoragePath;
    share.PATH_TEMP = path.resolve(share.PATH_GLOBAL, "temp");
    share.PATH_VOICE_PACKAGES = path.resolve(share.PATH_GLOBAL, "voice-packages");

    assets.init();
    initTimerHook(); 
    initCommands(context);
    initInputHook();
    initService();

    share.play();
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
