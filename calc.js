var storedValue = false;
var displayValue = false;
var operationActive = false;
var clearScreen = false;


const numpad = document.querySelector("#numpad");
const display = document.querySelector("#display");

for (let i = 9; i >= 0; i--) {
	let tempBtn = document.createElement('button');
	tempBtn.textContent = String(i);
	tempBtn.type = "button";
	tempBtn.id = "btn"+String(i);
	tempBtn.classList.add("numKeys");
	tempBtn.style.gridColumn = 1+(i+2)%3;
	tempBtn.style.gridRow = 4-Math.floor((i+2)/3);
	tempBtn.addEventListener("click", function(){numPress(this.textContent)});
	numpad.appendChild(tempBtn);
}
const decBtn = document.createElement('button');
	decBtn.textContent = ".";
	decBtn.type = "button";
	decBtn.id = "decBtn";
	decBtn.classList.add("numKeys")
	decBtn.style.gridColumn = 2;
	decBtn.style.gridRow = 4;
	decBtn.addEventListener("click", function(){clearPress()});
	numpad.appendChild(decBtn);
	
const clearBtn = document.createElement('button');
	clearBtn.textContent = "C";
	clearBtn.type = "button";
	clearBtn.id = "clearBtn";
	clearBtn.classList.add("numKeys")
	clearBtn.style.gridColumn = 1;
	clearBtn.style.gridRow = 4;
	clearBtn.addEventListener("click", function(){clearPress()});
	numpad.appendChild(clearBtn);

const opContainer = document.querySelector("#operationsContainer");
for (child of opContainer.childNodes) {
	child.addEventListener("click", function(){operationPress(this.id)});
}







function numPress(key) { 
	if (clearScreen) {
		drawScreen(null);
	}
	clearScreen = false;
	displayValue =  display.textContent + String(key);
	drawScreen(displayValue);
}

function clearPress(key) {
	displayValue = "";
	storedValue = null;
	clearScreen = false;
	operationActive = false;
	drawScreen(null);; 
}

function operationPress(id) {

	drawScreen(displayValue);
	if (display.textContent == "") {return}

	if (operationActive) {
		console.log(operationActive, id)
		if (operationActive == "divide" && displayValue == 0) {
			clearPress();
			drawScreen("ERROR");
			clearScreen = true;
		} else {
		
		displayValue = operate(operationActive, Number(storedValue), Number(displayValue));
		storedValue = displayValue;
		drawScreen(displayValue);
		clearScreen = true;
		operationActive = id;
		}

		if (id == "equals") {
			operationActive = false;
		}
		console.log(operationActive, id)

	} else {
		if (id != "equals") {
			operationActive = id;
			storedValue = displayValue;
			clearScreen = true;
			console.log("No Active Operation, ADDING:"+id);
		}

	}
	
}

function operate(operator, a, b) {
	switch (operator) {
		case "add": 
			return add(a,b);
		case "subtract":
			return subtract(a,b);
		case "multiply":
			return multiply(a,b);
		case "divide":
			return divide(a,b);
	}
}
		
function add (a,b) {
	return Number(a)+Number(b);
}

function subtract (a,b) {
	return a-b;
}

function multiply (a,b) {
	return a*b;
}

function divide (a, b) {
	
	return a/b;	
}

function drawScreen(value) {
	console.log(storedValue, displayValue, operationActive, clearScreen)
	if (value) {display.textContent =  String(value);}
	else {display.textContent = "";}	
}