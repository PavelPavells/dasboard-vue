const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      // rules: [
      //   {
      //     test: /\.svg$/,
      //     loader: "vue-svg-loader",
      //   },
      // ],
    },
    resolve: {
      alias: {
        "@icons": path.resolve(__dirname, "./assets/icons"),
        "@assets/*": path.resolve(__dirname, "./assets/*"),
        "@styles/*": path.resolve(__dirname, "./src/styles/*"),
        "@utils": path.resolve(__dirname, "../src/utils"),
        "@utils/*": path.resolve(__dirname, "./src/utils/*"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@components/*": path.resolve(__dirname, "./src/components/*"),
        "@containers": path.resolve(__dirname, "./src/containers"),
        "@containers/*": path.resolve(__dirname, "./src/containers/*"),
        "@selectors": path.resolve(__dirname, "./src/selectors"),
        "@selectors/*": path.resolve(__dirname, "./src/selectors/*"),
        "@modules": path.resolve(__dirname, "./src/modules"),
        "@modules/*": path.resolve(__dirname, "./src/modules/*"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@layouts/*": path.resolve(__dirname, "./src/layouts/*"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@pages/*": path.resolve(__dirname, "./src/pages/*"),
        "@sagas": path.resolve(__dirname, "./src/sagas"),
        "@sagas/*": path.resolve(__dirname, "./src/sagas/*"),
        "@src/*": path.resolve(__dirname, "./src/*"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@api/*": path.resolve(__dirname, "./src/api/*"),
        "@types": path.resolve(__dirname, "./src/types"),
        "@types/*": path.resolve(__dirname, "./src/types/*"),
      },
    },
  },
};
