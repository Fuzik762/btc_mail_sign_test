const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/styles/global/_colors.scss";
        @import "@/styles/global/_fonts.scss";
        @import "@/styles/global/_mixins.scss";
        @import "@/styles/global/_variables.scss";
        @import "@/styles/_index.scss";
        `
      }
    }
  }
});
