const dirVars = require('../base/dirVars.config.js');
const moduleConfig = {
	rules: [
		{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader"
				}
			],
			include: dirVars.srcDir,
			exclude: /node_modules/
		},
		{
			test: /\.art$/,
			use: [
				{
					loader: "art-template-loader"
				}
			],
			include: dirVars.srcDir,
			exclude: /node_modules/
		},
		{
			test: /\.(png|jpg|gif)$/,
			use: {
				loader: "url-loader",
				options: {
					limit: 8192,
					name: 'static/imgs/[hash:8].[ext]',
					path: dirVars.distDir
				}
			},
			include: dirVars.srcDir,
			exclude: /node_modules/
		},
		{
			test: /\.(woff|woff2|svg|eot|ttf)$/,
			use: {
				loader: "file-loader",
				options: {
					name: 'static/fonts/[name].[hash:8].[ext]',
					path: dirVars.distDir
				}
			},
			include: dirVars.srcDir,
			exclude: /node_modules/
		}
	]
};


module.exports = moduleConfig;
