const pluginsConfig = require('./inherit/plugins.config.js');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

pluginsConfig.push(new webpack.DefinePlugin({
	"process.env": {
		"NODE_ENV": JSON.stringify('production')
	}
}));

pluginsConfig.push(new ManifestPlugin());

pluginsConfig.push(new UglifyJSPlugin({
	sourceMap: true
}));

pluginsConfig.push(new webpack.HashedModuleIdsPlugin());

module.exports = pluginsConfig;
