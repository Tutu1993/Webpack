const entryConfig = require('./webpack-config/entry.config.js')
const outputConfig = require('./webpack-config/output.config.js')
const moduleConfig = require('./webpack-config/module.dev.config.js')
const pluginsConfig = require('./webpack-config/plugins.dev.config.js')
const resolveConfig = require('./webpack-config/resolve.config.js')
const devServerConfig = require('./webpack-config/devServer.config.js')
const dirVars = require('./webpack-config/base/dirVars.config.js')

outputConfig.filename = '[name]/entry.js'

module.exports = {
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	plugins: pluginsConfig,
	resolve: resolveConfig,
	devServer: devServerConfig,
	devtool: 'inline-source-map',
}
