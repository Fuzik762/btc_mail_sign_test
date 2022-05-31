const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) => addStyleResource(config.module.rule("scss").oneOf(type)));
  },
});

function addStyleResource(rule) {
  rule
    .use("sass-resources-loader")
    .loader("sass-resources-loader")
    .options({
      resources: path.resolve(__dirname, "src/styles/_index.scss"),
    });
}
