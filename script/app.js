const windowDiv = document.querySelector('#window');
const navigatorDiv = document.querySelector('#navigator');

function displayInfos (destination, objectToDisplay) {

	console.log(objectToDisplay, typeof objectToDisplay);

	let list = objectToDisplay;

	if (typeof objectToDisplay === 'object') {
		list = Object.keys(objectToDisplay);
	}

	list.forEach(element => {

		let divElem = document.createElement('div');
		divElem.className = "element";

		console.log(typeof objectToDisplay[element])

		if (typeof objectToDisplay[element] === 'object') {
			displayInfos(divElem, element);
		} else {
			divElem.textContent = objectToDisplay[element];
		}
		destination.append(divElem);
	});
}

function displayDimensions () {
	windowDiv.innerHTML = `x = ${window.innerWidth}
	<br/>
	y = ${window.innerHeight}
	`;
}

/*
displayInfos(windowDiv, window);*/

setInterval(displayDimensions, 10);