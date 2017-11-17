const dirVars = require('../base/dirVars.config.js');

module.exports = {
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
			test: /\.(png|jpg|gif)$/,
			use: {
				loader: "url-loader",
				options: {
					limit: 8192,
					name: 'static/imgs/[hash:16].[ext]',
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
					name: 'static/fonts/[name].[hash:16].[ext]',
					path: dirVars.distDir
				}
			},
			include: dirVars.srcDir,
			exclude: /node_modules/
		}
	]
};
