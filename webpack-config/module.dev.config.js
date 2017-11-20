const dirVars = require('./base/dirVars.config.js');
const moduleConfig = require('./inherit/module.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

moduleConfig.rules.push({
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ["env", "react"],
			plugins: ["transform-runtime"],
			env: {
				development: {
					presets: ["react-hmre"]
				}
			}
		}
	},
	include: dirVars.srcDir,
	exclude: /node_modules/
});

moduleConfig.rules.push({
	test: /\.css$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: [
			{
				loader: "css-loader",
			},
			{
				loader: "postcss-loader"
			}
		]
	}),
	include: dirVars.srcDir,
	exclude: /node_modules/
});

module.exports = moduleConfig;
