//Class Initialization
class Stack {
  constructor() {
    this.stackTop = -1;
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    this.stackTop++;
  }

  pop() {
    if(this.isEmpty()) return;
    //else
    this.stackTop--;
    return this.stack.pop();
  }

  top() {
    if(this.isEmpty()) return undefined;
    //else
    return this.stack[this.stackTop];
  }

  isEmpty() {
    return (this.stackTop < 0);
  }

  size() {
    return this.stack.length;
  }
}

define('Stack', function() {return Stack;});
