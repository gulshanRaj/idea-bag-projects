var getFactorial = function(num) {
  var factorialValue = 1;
  for(var i = 2; i <= num; i++) {
    factorialValue = factorialValue*i;
  }
  return factorialValue;
};

var handler = {
  giveResults: function() {
    var numberInput = document.getElementById('enterNumberText').value;
    var result = getFactorial(+numberInput);
    view.displayResult(result);
  }
};

var view = {
  displayResult: function(result) {
    var resultTextBox = document.getElementById('resultTextBox');
    resultTextBox.innerText = 'Result: '+result.toString();
  }
};
