const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Kolosov.dev - Software Developer',
    },
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'select-item-selected-color': '#000',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})

