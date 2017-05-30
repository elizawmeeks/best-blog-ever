"use strict";

let Handlebars = require('hbsfy/runtime'),
	headerData = require('./header-data'),
	footerData = require("./footer-data"),
	blogData = require("./loader"),
	blogTemplate = require("../templates/blog.hbs"),
	footerTemplate = require("../templates/footer.hbs"),
	headerTemplate = require("../templates/header.hbs");

// console.log("blogdata", blogData);

// let populateBlog = (stuff) => {

// }

$("#header").append(headerTemplate(headerData));
blogData()
.then(
	(data) => {
	console.log("blog data", data);
	$("#main").html(blogTemplate(data));
	},
	(reason) => {
		console.log("something went wrong");
	});
$("#footer").append(footerTemplate(footerData));