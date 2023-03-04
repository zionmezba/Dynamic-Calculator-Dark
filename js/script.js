`use strict`
function refreshTime() {
    var datetime = new Date().toLocaleTimeString();
    console.log(datetime); // it will represent date in the console of developers tool
    document.getElementById("time").textContent = datetime; // represent on html page
}
setInterval(refreshTime, 100);

let outputUpper = document.querySelector('#inp');
let outputLower = document.querySelector('#result');

function insert(e) {
    if (outputLower.innerHTML === '0') {
        outputLower.innerHTML = e.innerHTML;
    } else {
        outputLower.innerHTML += e.innerHTML;
    }
}

function pressAllClear() {
    outputUpper.innerHTML = '';
    outputLower.innerHTML = '0';
}

function backsp() {
    outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
}

function equal() {
    let exp = outputLower.innerHTML;
    outputUpper.innerHTML = exp;
    exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
    let result;
    try {
        result = eval(exp);
        // if decimal number more than 4 decimal places
        if (result.toString().indexOf('.') !== -1) {
            result = result.toFixed(4);
        }
    } catch (e) {
        result = 'Error';
    }
    outputLower.innerHTML = result;
}

function operator(e) {
    // check last operator
    let lastOperator = outputLower.innerHTML.slice(-1);
    if (lastOperator.includes('+', '-', '×', '÷')) {
        output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
    } else {
        outputLower.innerHTML += e.innerHTML;
    }
}

function dot() {
    result.innerHTML += '.';
}
