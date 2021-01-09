const path = require('path');
const paths = require('react-scripts/config/paths');

module.exports = function override(config, env) {
	// 修改path目录
	paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs');
	config.output.path = path.join(path.dirname(config.output.path), 'docs');

	return config;
};