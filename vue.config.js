const MonocoEditorPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
  assetsDir: "static",
  baseUrl: "/jdweb/",
  configureWebpack: {
    plugins: [
      new MonocoEditorPlugin()
    ]
  }
};
