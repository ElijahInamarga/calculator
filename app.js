const display = document.querySelector('h1');
const acBtn = document.getElementById('ac');                
const signBtn = document.getElementById('sign');           
const percentBtn = document.getElementById('percent'); 
const divideBtn = document.getElementById('divide');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const multiplyBtn = document.getElementById('multiply');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const minusBtn = document.getElementById('minus');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const plusBtn = document.getElementById('plus');
const zeroBtn = document.getElementById('zero');
const pointBtn = document.getElementById('point');          
const equalBtn = document.getElementById('equal');     
const delBnt = document.getElementById('del');    

let eq = ''; // User equation

function displayEq() {
    display.innerHTML = eq;
}

function lastIsNotOperator() {
    const operator = ['/', '*', '-', '+', '.'];

    if(operator.includes(eq[eq.length - 1])) {
        return false;
    } else {
        return true;
    }
}

acBtn.onclick = () => {
    eq = '';   
    displayEq();
}

pointBtn.onclick = () => {
    if(lastIsNotOperator()) {
        eq += '.';
        displayEq();
    } else {
        eq = eq.substring(0, eq.length - 1);
        eq += '.';
        displayEq();
    }
}

divideBtn.onclick = () => {
    if(lastIsNotOperator()) {
        eq += '/';
        displayEq();
    } else {
        eq = eq.substring(0, eq.length - 1);
        eq += '/';
        displayEq();
    }
}

plusBtn.onclick = () => {
    if(lastIsNotOperator()) {
        eq += '+';
        displayEq();
    } else {
        eq = eq.substring(0, eq.length - 1);
        eq += '+';
        displayEq();
    }
}

minusBtn.onclick = () => {
    if(lastIsNotOperator()) {
        eq += '-';
        displayEq();
    } else {
        eq = eq.substring(0, eq.length - 1);
        eq += '-';
        displayEq();
    }
}

multiplyBtn.onclick = () => {
    if(lastIsNotOperator()) {
        eq += '*';
        displayEq();
    } else {
        eq = eq.substring(0, eq.length - 1);
        eq += '*';
        displayEq();
    }
}

percentBtn.onclick = () => {
    eq = eval(eq) / 100;
    displayEq();
}

delBnt.onclick = () => {
    eq = eq.substring(0, eq.length - 1);
    displayEq();
}

oneBtn.onclick = () => {
    eq += '1';
    displayEq();
}

twoBtn.onclick = () => {
    eq += '2';
    displayEq();
}

threeBtn.onclick = () => {
    eq += '3';
    displayEq();
}

fourBtn.onclick = () => {
    eq += '4';
    displayEq();
}

fiveBtn.onclick = () => {
    eq += '5';
    displayEq();
}

sixBtn.onclick = () => {
    eq += '6';
    displayEq();
}

sevenBtn.onclick = () => {
    eq += '7';
    displayEq();
}

eightBtn.onclick = () => {
    eq += '8';
    displayEq();
}

nineBtn.onclick = () => {
    eq += '9';
    displayEq();
}

zeroBtn.onclick = () => {
    eq += '0';
    displayEq();
}

equalBtn.onclick = () => {
    eq = eval(eq);
    displayEq();
}
