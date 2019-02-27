const MonocoEditorPlugin = require('monaco-editor-webpack-plugin')
const webpack = require('webpack');
const path = require('path');

module.exports = {
  assetsDir: 'static',
  baseUrl: '/jdweb/',
  configureWebpack: {
    node: {
      process: true,
    },
    plugins: [
      new MonocoEditorPlugin({
        // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        // Include a subset of languages support
        // Some language extensions like typescript are so huge that may impact build performance
        // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
        // Languages are loaded on demand at runtime
        languages: ['yaml', 'javascript', 'css', 'html'],
        options: {
          automaticLayout: true,
          wordWrap: 'on'
        }
      })
    ]
  },
  chainWebpack: config => {
    config.module
      .rule('shell')
      .test(/\.(sh|bat|cmd)(\?.*)?$/)
      .use('file')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'public/'
      })
  }
};
