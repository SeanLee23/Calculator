let result = '';

function appendNumber(number) {
  result += number;
  document.getElementById('result').value = result;
}

function clearResult() {
  result = '';
  document.getElementById('result').value = '';
}

function operate(operator) {
  result += operator;
  document.getElementById('result').value = result;
}

function calculate() {
  try {
    result = eval(result);
    document.getElementById('result').value = result;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
