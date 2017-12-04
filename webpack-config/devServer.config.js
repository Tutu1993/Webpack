const devServerConfig = {
	contentBase: './dist',
	hot: true,
	inline: true,
	progress: true,
	compress: true,
	proxy: {
		'/interface/*': {
			target: 'http://localhost:80',
			changeOrigin: true,
			secure: false
		}
	}
}

module.exports = devServerConfig
