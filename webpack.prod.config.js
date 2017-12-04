const entryConfig = require('./webpack-config/entry.config.js')
const outputConfig = require('./webpack-config/output.config.js')
const moduleConfig = require('./webpack-config/module.prod.config.js')
const pluginsConfig = require('./webpack-config/plugins.prod.config.js')
const resolveConfig = require('./webpack-config/resolve.config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

pluginsConfig.push(new CleanWebpackPlugin(['./dist']))

module.exports = {
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	plugins: pluginsConfig,
	resolve: resolveConfig,
	// devtool: 'source-map',
}
