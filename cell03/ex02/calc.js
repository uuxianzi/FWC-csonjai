const leftInput = document.getElementById('left-input');
const rightInput = document.getElementById('right-input');
const operatorSelect = document.getElementById('operator');
const submitBtn = document.getElementById('btn');

function isPositiveInteger(value) {
    return /^\d+$/.test(value);
}

submitBtn.addEventListener('click', function() {
    const leftVal = leftInput.value;
    const rightVal = rightInput.value;
    const operator = operatorSelect.value;

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        console.log('Error :(');
        return;
    }

    const num1 = Number(leftVal);
    const num2 = Number(rightVal);
    let result;

    if ((operator === '/' || operator === '%') && num2 === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert('Please, use me...');
}, 30000);