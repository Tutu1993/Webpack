const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirVars = require('./base/dirVars.config.js');
const moduleConifg = require('./inherit/module.config.js');

moduleConifg.rules.push({
	test: /\.js$/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ["env", "react"],
			plugins: ["transform-runtime"]
		}
	},
	include: dirVars.srcDir,
	exclude: /node_modules/
});

moduleConifg.rules.push({
	test: /\.css$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: [
			{
				loader: "css-loader",
				options: {
					minimize: true
				}
			},
			{
				loader: "postcss-loader"
			}
		]
	}),
	include: dirVars.srcDir,
	exclude: /node_modules/
});

module.exports = moduleConifg;
