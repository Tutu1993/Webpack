const path = require('path');
const moduleExports = {};

moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // 根目录

moduleExports.srcDir = path.resolve(moduleExports.staticRootDir, './src'); // src 目录

moduleExports.distDir = path.resolve(moduleExports.staticRootDir, './dist'); // dist 目录

module.exports = moduleExports;
