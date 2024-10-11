let calc = localStorage.getItem('calcBuffer') || '';

displayCalc();

function displayCalc() {
    document.querySelector('.result').innerHTML = calc;
}
function calculationBuffer(calcBuffer) {
    calc += calcBuffer;
    calctoLocal();
    displayCalc();
}

function evaluateCalc() {
    calc = eval(calc);
    calctoLocal();
    displayCalc();
}
function clearCalc() {
    calc = '';
    localStorage.removeItem('calcBuffer');
    displayCalc();
}

function calctoLocal() {
    localStorage.setItem('calcBuffer', calc);
}