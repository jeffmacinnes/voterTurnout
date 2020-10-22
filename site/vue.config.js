const isProd = process.env.NODE_ENV === "production";
const path = require("path");
const plugins = [];
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Turn Up the Turnout'
        return args
      })
  },
  publicPath: "",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/master.scss";`,
      },
    },
  },
  lintOnSave: isProd,
  configureWebpack: {
    devtool: "source-map",
    plugins: plugins,
  }
};
