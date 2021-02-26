
const numpad = document.querySelector("#numpad");



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
	


function numPress(key) { 
	let display = document.querySelector("#display");
	display.textContent = display.textContent + String(key); 
}

function clearPress(key) {
	let display = document.querySelector("#display");
	display.textContent = ""; 
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
	return a+b;
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
