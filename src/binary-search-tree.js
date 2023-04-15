const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  add(/* data */ data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.head) {
      this.head = new Node(data);
      return this;
    }
    let current = this.head;
    while (current) {
      if (current.data === data) return current;

      if (current.data > data) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(data);
          return this;
        }
      } else if (current.data < data) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(data);
          return this;
        }
      }
    }
  }

  has(/* data */ data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // const res = this.find(data)
    return this.find(data) instanceof Node;
  }

  find(/* data */ data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.head;
    while (current) {
      if (current.data === data) return current;
      if (current.data > data) current = current.left;
      else if (current.data < data) current = current.right;
    }
    return null;
  }

  remove(/* data */ data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current) {
      if (current.data > data) {
        if (current.left) {
          current = current.left;
        } else {
          return;
        }
      } else if (current.data < data) {
        if (current.right) {
          current = current.right;
        } else {
          return;
        }
      } else if (current.data === data) {
        if (current.right) {
          let changing = current.right;
          while (changing.left.left) {
            changing = changing.left;
          }
          current.data = changing.left.data;
          changing.left = null;
        } else if (current.left) {
          let changing = current.left;
          while (changing.right.right) {
            changing = changing.right;
          }
          current.data = changing.right.data;
          changing.right = null;
        }
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.head) return null;
    let current = this.head;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.head) return null;
    let current = this.head;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
