"use strict";

console.log("JSONcalls, yo!");

let explosives = {};
explosives.productInfo = [];


explosives.loadProducts = function(buttonID) {
	return new Promise(function(resolve, reject) {
		let getJSON = new XMLHttpRequest();
		getJSON.open('GET', `https://exercisedb-20924.firebaseio.com/acme-explosives/products/0.json?orderBy="category"&equalTo=${buttonID}`);
		getJSON.send();
		getJSON.addEventListener("load", (event) => {
            let products = JSON.parse(event.target.responseText);
            resolve(products);
		});
	});
};

explosives.loadCategories = function() {
	return new Promise(function(resolve, reject) {
		let getJSON = new XMLHttpRequest();
		getJSON.open('GET', 'https://exercisedb-20924.firebaseio.com/acme-explosives/categories.json');
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
		getJSON.open('GET', 'https://exercisedb-20924.firebaseio.com/acme-explosives/types.json');
		getJSON.send();
		getJSON.addEventListener("load", (event) => {
            let types = JSON.parse(event.target.responseText);
            resolve(types);
		});
	});
};



module.exports = explosives;