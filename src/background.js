"use strict";

import {
  app,
  protocol,
  BrowserWindow,
  ipcMain as windowEvents
} from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";
import path from "path";
import Store from "electron-store";
const { autoUpdater } = require("electron-updater");

autoUpdater.setFeedURL({
  provider: "github",
  repo: "mixmaster-hub",
  owner: "mixmaster-app"
});

let mainWindow = null;
let splashWindow = null;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

async function createMainWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    minWidth: 1024,
    minHeight: 650,
    width: 1500,
    height: 850,
    frame: false,
    show: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "icon/icon.png"),
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  });

  autoUpdater.on("update-available", () => {
    mainWindow.webContents.send("app-update-information", {
      hasNewVersionAvailable: true
    });
  });

  autoUpdater.on("update-not-available", () => {
    mainWindow.webContents.send("app-update-information", {
      hasNewVersionAvailable: false
    });
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    mainWindow.loadURL("app://./index.html");
  }
  autoUpdater.autoDownload = false;
  autoUpdater.checkForUpdates();

  mainWindow.webContents.setZoomFactor(1.0);

  mainWindow.on("closed", () => {
    mainWindow = null;
    try {
      splashWindow.close();
    } catch (e) {
      console.error(e);
    }
  });
}

async function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 350,
    height: 425,
    resizable: false,
    frame: false,
    alwaysOnTop: true,
    transparent: false,
    icon: path.join(__dirname, "icon/icon.png")
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await splashWindow.loadFile("../public/splash.html");
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    splashWindow.loadURL("app://./splash.html");
  }

  splashWindow.on("closed", () => {
    splashWindow = null;
  });
}
windowEvents.on("launch-app-update", () => {
  autoUpdater.downloadUpdate();
  autoUpdater.once("update-downloaded", () => {
    autoUpdater.quitAndInstall();
  });
});

windowEvents.on("close-app", () => {
  app.quit();
});

windowEvents.on("minimize-app", () => {
  mainWindow.minimize();
});

windowEvents.on("maximize-app", () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

Store.initRenderer();

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

app.on("ready", async () => {
  createSplashWindow();
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension({
        id: "ljjemllljcmogpfapbkkighbhhppjdbg",
        electron: ">=1.2.1"
      });
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createMainWindow();
  mainWindow.on("ready-to-show", () => {
    setTimeout(() => {
      if (!mainWindow.isVisible()) {
        mainWindow.show();
        try {
          splashWindow.close();
        } catch (e) {
          console.log(e);
        }
      }
    }, 150);
  });
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
