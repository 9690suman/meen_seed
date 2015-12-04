'use strict';
var mongoose = require('mongoose');

module.exports = function(config){
	var db = null;
	db = mongoose.connect(config.dbUrl);

	//Load all the Models here.
	//require('../app/models/todo.server.model');


	return db;
};
