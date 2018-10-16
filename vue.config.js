const MonocoEditorPlugin = require('monaco-editor-webpack-plugin')
const webpack = require('webpack');

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
  }
};
