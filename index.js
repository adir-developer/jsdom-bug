const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
const parent = document.createElement('div');
parent.innerHTML =
	'<div class="first" style="font-size:15px">some text</div>' +
	'<div class="second" style="font-size:1r5px">some text</div>';
const first = parent.querySelector('div.first');
const second = parent.querySelector('div.second');

console.log(`first.style.length should be: 1, actual: ${first.style.length}`);
console.log(`second.style.length should be: 0, actual: ${second.style.length}`);
