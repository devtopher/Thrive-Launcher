// Renderer configuration options for easy changing when debugging
"use strict";

module.exports = {
    // Shows output from 7z. Not really useful as it shows no actual progress
    showUnpackMessages: false,

    // If true then the testing data (local, unsigned) file is loaded
    loadTestVersionData: false,

    // When true checks if computer has intel graphics that likely cause problems
    checkGraphicsCard: false,

    devBuildCacheName: "devbuild_cache.json",

    // When true errors in the renderer process is caught with electron-log
    catchErrors: true,

    // For local testing
    // devCenterURL: "http://localhost:5000",
    // devCenterURL: "https://staging.dev.revolutionarygamesstudio.com/",
    devCenterURL: "https://dev.revolutionarygamesstudio.com/",

    // Hides main website link in steam version
    hideMainWebsiteInSteam: false,

    // Hides the DevBuild options (login, selecting DevBuild, clearing cache)
    hideDevBuildsInSteam: true,

    // Time to wait before handling an error signal to allow time for exit signal, which
    // is much more useful for subprocess handling. In milliseconds
    maxDelayBetweenExitAfterErrorSignal: 150,

    // Time to wait before closing the launcher after auto launch to detect if the game
    // immediately crashed.
    closeDelayAfterAutoStart: 350,

    // Time in milliseconds that the game must have run to auto close without error
    autoCloseMinimumGameDuration: 1200,

    // Time in milliseconds before hiding the launcher when starting the game
    minimizeDelayAfterGameStart: 200,

    // Time in milliseconds to check that the game process has properly launched, and hasn't
    // suddenly died
    checkLauncherProcessIsRunningDelay: 750,
};
