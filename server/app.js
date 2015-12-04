'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./configs/config');
var expressConf = require('./configs/expressConf');
var mongooseConf = require('./configs/mongooseConf');
var app = null;

module.exports.start = function start(){
	//Initialize mongoose
	var db = mongooseConf(config);

	//Initialize express.
	var app = expressConf(config);

}
