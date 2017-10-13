require(['stack']);

var calculator = {
  operateOn: function(input) {
    var inputAr = this.format(input);
    var postfixStr = this.infixToPostfix(inputAr);
    console.log(postfixStr);
    return this.evaluatePostfix(postfixStr);
  },
  format: function(input) {
    //convert given string into infix array
    input = input.replace(/[\+\-\*\/\(\)]/g, ' $& ').replace(/  +/g, ' '); //place single spaces around operators
    inputAr = input.split(' ').filter( (w) => w != '');
    return inputAr;
  },
  infixToPostfix: function(strAr) {
    // convert infix to postfix
    //ISSUE -ve no.s
    var postfixAr=[];
    var stack = new Stack();
    var nextNumberNegate = false; //-ve number bug

    for(var i=0; i<strAr.length; i++) {
      if(helper.isOperand(strAr[i])) { //if operand push into postfix
        if(nextNumberNegate) {
          postfixAr.push('-'+strAr[i]);
          nextNumberNegate = false;
        }
        else postfixAr.push(strAr[i]);
      }
      else if(stack.isEmpty() || stack.top()=='(') {
        if(strAr[i]=='-') nextNumberNegate = true;
        else stack.push(strAr[i]);
      }
      else if(strAr[i]=='(') {
        stack.push(strAr[i]);
      }
      else if(strAr[i]==')') {
        while(stack.top() != '(') {
          postfixAr.push(stack.pop());
        }
        stack.pop();
      }
      else if(strAr[i]=='*' || strAr[i]=='/') {
        stack.push(strAr[i]);
      }
      else {
        while(!stack.isEmpty() && (stack.top()=='*' || stack.top()=='/')) {
          postfixAr.push(stack.pop());
        }
        stack.push(strAr[i]);
      }
    }
    while(!stack.isEmpty()) {
      postfixAr.push(stack.pop());
    }

    return postfixAr;
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

var helper = {//other functions that were helpful
  operators: ['(', ')', '+', '-', '*', '/'],

  isOperand: function(word) {
    return this.operators.indexOf(word)===(-1);
  }
}
