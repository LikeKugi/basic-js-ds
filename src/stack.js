const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null;
    this.top = null;
  }
  push(/* element */ element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.head === this.top) {
      this.top = {
        data: element,
        prev: this.head,
      };
    } else {
      this.top = {
        data: element,
        prev: this.top,
      };
    }
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let out = this.top.data;
    this.top = this.top.prev;
    return out;
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.top ? this.top.data : undefined;
  }
}

module.exports = {
  Stack,
};
