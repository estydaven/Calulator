let calculator = document.getElementById('calculator');
let input = document.getElementById('result');
let clearSymbol = document.getElementById('clear-symbol');
let clearAll = document.getElementById('clear');
let summary = document.getElementById('summary');
let result;
let number = '';

calculator.addEventListener('click', event => {
    if (event.target.classList.contains('clear')) {
        input.value = '0';
        number = '';
    }
    if (event.target.classList.contains('calculator__button_clear')) {
        let value = input.value;
        value = value.substring(0, value.length - 1);
        input.value = value;
        number = '';
    }
    if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {        
        number += event.target.dataset.value;
        input.value = number;
    }
})
summary.addEventListener('click', () => {
    let operator = ['*', '/', '+', '-'];
        console.log('aaa')
        switch(operator) {
            case '*':
                result = number * number;
                console.log(number);
                input.value = result;
                console.log(result)
                break;
            case '/':
                result = number / number;
                input.value = result;
                console.log(result)
                break;
            case '+':
                result = number + number;
                input.value = result;
                console.log(result)
                break;
            case '-':
                result = number - number;
                input.value = result;
                console.log(result)
                break;
        }
})