const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  addPlugins,
  babel,
  createConfig,
  entryPoint,
  setOutput,
} = require('webpack-blocks')

module.exports = createConfig([
  entryPoint('./src/index.js'),
  setOutput({ filename: 'index.js' }),
  addPlugins([new HtmlWebpackPlugin()]),
  babel(),
])
