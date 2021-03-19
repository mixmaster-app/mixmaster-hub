module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOPtions: {
        win: {
          icon: "./public/icon.ico"
        }
      },
      nodeIntegration: true
    }
  }
};
