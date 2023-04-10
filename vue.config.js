module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOPtions: {
        productName: "mixmaster-hub",
        win: {
          icon: "./public/img/icon.ico"
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
