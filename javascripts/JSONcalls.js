"use strict";

console.log("JSONcalls, yo!");

let explosives = {};

explosives.loadCategories = function() {
	return new Promise(function(resolve, reject) {
		let getJSON = new XMLHttpRequest();
		getJSON.open('GET', 'javascripts/categories.json');
		getJSON.send();
		getJSON.addEventListener("load", (event) => {
            let categories = JSON.parse(event.target.responseText);
            resolve(categories);
		});
	});
};

explosives.loadTypes = function() {
	return new Promise(function(resolve, reject) {
		let getJSON = new XMLHttpRequest();
		getJSON.open('GET', 'javascripts/types.json');
		getJSON.send();
		getJSON.addEventListener("load", (event) => {
            let types = JSON.parse(event.target.responseText);
            resolve(types);
		});
	});
};

explosives.loadProducts = function() {
	return new Promise(function(resolve, reject) {
		let getJSON = new XMLHttpRequest();
		getJSON.open('GET', 'javascripts/products.json');
		getJSON.send();
		getJSON.addEventListener("load", (event) => {
            let products = JSON.parse(event.target.responseText);
            resolve(products);
		});
	});
};

module.exports = explosives;