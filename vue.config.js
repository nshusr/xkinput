const MonocoEditorPlugin = require('monaco-editor-webpack-plugin')
const webpack = require('webpack');
const path = require('path');

module.exports = {
  assetsDir: 'static',
  baseUrl: '/jdweb/',
  configureWebpack: {
    plugins: [
      new MonocoEditorPlugin(),
      new webpack.ContextReplacementPlugin(
        /monaco-editor(\\|\/)esm(\\|\/)vs(\\|\/)editor(\\|\/)common(\\|\/)services/,
        __dirname
      )
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
