const webpack = require('webpack')
const pluginsConfig = require('./inherit/plugins.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HashOutput = require('webpack-plugin-hash-output')

pluginsConfig.push(new webpack.optimize.CommonsChunkPlugin({
	name: 'vendor',
	filename: 'commons/vendor.[chunkhash:8].js',
	minChunks: Infinity,
}))

pluginsConfig.push(new webpack.optimize.CommonsChunkPlugin({
	name: 'runtime',
	filename: 'commons/runtime.[chunkhash:8].js',
	minChunks: Infinity,
}))

pluginsConfig.push(new webpack.DefinePlugin({
	"process.env": {
		"NODE_ENV": JSON.stringify('production'),
	},
}))

pluginsConfig.push(new UglifyJSPlugin())

pluginsConfig.push(new webpack.HashedModuleIdsPlugin())

pluginsConfig.push(new HashOutput({
	manifestFiles: 'runtime',
}))

module.exports = pluginsConfig
