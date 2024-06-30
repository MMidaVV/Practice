const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: `/PracticFirstWeek/`,
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
