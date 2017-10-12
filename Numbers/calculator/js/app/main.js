require(['stack']);

var calculator = {
  operateOn: function(input) {
    var inputAr = this.format(input);
    var postfixStr = this.infixToPostfix(inputAr);
    return this.evaluatePostfix(postfixStr);
  },
  format: function(input) {
    //convert given string into infix array
    input = input.replace(/[\+\-\*\/\(\)]/g, ' $& ').replace(/  +/g, ' '); //place single spaces around operators
    inputAr = input.split(' ').filter( (w) => w != '');
    return inputAr;
  },
  infixToPostfix: function(strAr) {
    //TODO convert infix to postfix

    var st = new Stack();
    for(var i=0; i<strAr.length; i++) {
      if()
    }
  },
  evaluatePostfix: function() {
    //TODO solve the expression
  }
};

var handler = {
  clear: function() {
    //clear everything
    view.displayResult('');
  },
  getAns: function() {
    //handle given expression
    var calculatorDisplay = document.getElementById('calculatorDisplay');
    var calculatorDisplayOutput = calculator.operateOn(calculatorDisplay.value);
    displayResult(calculatorDisplayOutput);
  }
};

var view = {
  displayResult: function(displayString) {
    var calculatorDisplay = document.getElementById('calculatorDisplay');
    calculatorDisplay.value = displayString;
  }
};
