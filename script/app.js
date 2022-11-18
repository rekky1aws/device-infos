const windowDiv = document.querySelector('#window');
const navigatorDiv = document.querySelector('#navigator');

function displayInfos (destination, objectToDisplay, name = "", level = 0) {

	if (level <= 4)
	{
		console.log(objectToDisplay, typeof objectToDisplay);
		console.group();

		let list = objectToDisplay;

		if (typeof objectToDisplay === 'object') {
			list = Object.keys(objectToDisplay);
		}

		list.forEach(element => {

			let divElem = document.createElement('div');
			divElem.className = "element";

			console.log(typeof objectToDisplay[element])

			if (typeof objectToDisplay[element] === 'object' && element !== name && element !== 'self') {
				console.group();
				console.log(element, objectToDisplay[element]);
				displayInfos(divElem, objectToDisplay[element], element, level + 1);
				console.groupEnd();
			}

			 /*else {*/
				divElem.textContent = objectToDisplay[element];
			//}
			destination.append(divElem);
		});

		console.groupEnd();
	}
}

function displayDimensions () {
	windowDiv.innerHTML = `x = ${window.innerWidth}
	<br/>
	y = ${window.innerHeight}
	`;
}


/*displayInfos(windowDiv, window);*/

/*setInterval(displayDimensions, 10);*/

console.log(Object.keys(window));