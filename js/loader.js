"use strict";

let entries = [],
	$ = require("jquery");

let ajaxEntries = () => {
	return new Promise (function(resolve, reject){
		$.ajax({
			url: "../blog.json",
			success: function(data){
				resolve(data);
			}
		});
	});
};

module.exports = ajaxEntries;