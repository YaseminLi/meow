const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  chainWebpack(config) {
		config.resolve.alias
			.set('components', resolve('src/components'))
			.set('common', resolve('src/common'))
	}
}
