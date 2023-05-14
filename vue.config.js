module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "fr.kiiow.mixmaster.hub",
        productName: "mixmaster-hub",
        win: {
          icon: "./build/icon.ico",
          target: "nsis"
        },
        nsis: {
          allowElevation: false,
          allowToChangeInstallationDirectory: true,
          installerIcon: "./build/installer.ico",
          installerHeaderIcon: "./build/icon.ico",
          installerSidebar: "./build/installerSidebar.bmp",
          uninstallerSidebar: "./build/installerSidebar.bmp",
          oneClick: false,
          perMachine: false
        },
        publish: [
          {
            provider: "github",
            owner: "mixmaster-app",
            repo: "mixmaster-hub",
            releaseType: "draft"
          }
        ]
      },
      nodeIntegration: true
    }
  }
};
