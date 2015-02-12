var blueberries = {
	fullName: 'Vaccinium corymbosum',
	growsOnShrub: true,
	energy: 240,
	carboydrates: 14.49,
	protein: 0.74,
}

var grapes = {
	fullName: 'Vitis vinifera',
	growsOnShrub: false,
	energy: 288,
	carboydrates: 18.1,
	protein: 0.72,
}

var redcurrant = {
	fullName: 'Ribes rubrum',
	growsOnShrub: true,
	energy: 234,
	carboydrates: 13.8,
	protein: 1.4,
}

var berries = ['blueberries', 'grapes', 'redcurrant'];

var writeberries = function (berries) {
	document.write('<h1>' + berries.fullName + '</h1>')

	document.write('<dl>');
	document.write('<dt>Grows on shrub:</dt>');
	document.write('<dd>' + berries.growsOnShrub + '</dd>');
	document.write('<dt>energy:</dt>');
	document.write('<dd>' + berries.energy + '</dd>');
	document.write('<dt>Carboydrates:</dt>');
	document.write('<dd>' + berries.carboydrates + '</dd>');
	document.write('<dt>Protein:</dt>');
	document.write('<dd>' + berries.protein + '</dd>');
	document.write('</dl>');
}

var allBerries = [blueberries, grapes, redcurrant];
allBerries.forEach(writeberries);
