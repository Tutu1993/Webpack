const webpack = require('webpack')
const pluginsConfig = require('./inherit/plugins.config.js')

pluginsConfig.push(new webpack.optimize.CommonsChunkPlugin({
	name: 'vendor',
	filename: 'commons/vendor.js',
	minChunks: Infinity
}))

pluginsConfig.push(new webpack.optimize.CommonsChunkPlugin({
	name: 'runtime',
	filename: 'commons/runtime.js',
	minChunks: Infinity
}))

pluginsConfig.push(new webpack.DefinePlugin({
	"process.env": {
		"NODE_ENV": JSON.stringify('development')
	}
}))

pluginsConfig.push(new webpack.HotModuleReplacementPlugin())

module.exports = pluginsConfig
