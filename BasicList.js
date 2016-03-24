'use strict';

function BasicList (options) {
	this.options = options || {};
	this.isComplete = false;
	this.items = [];

	this.itemInput = document.querySelector(options.itemInputSelector);
	this.submitButton = document.querySelector(options.submitButtonSelector);
	this.list = document.querySelector(options.listSelector);

	this.init();
}

BasicList.prototype = {
	constructor: BasicList,
	init: function () {
		this.submitButton.addEventListener('submit', this.handleSubmit.bind(this), false);
	},
	handleSubmit: function (e) {
		e.preventDefault();
		this.add(this.itemInput.value);
		this.clear();
	},
	add: function (item) {
		var node = document.createElement('li'),
			text = document.createTextNode(item);

		node.classList.add('item');
		node = this.list.appendChild(node);
		node = node.appendChild(text);

		this.items.push(item);
	},
	clear: function () {
		this.itemInput.value = '';
	}
};
