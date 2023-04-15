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
    return !!this.find(data);
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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this._deleteNode(data);
  }

  min(root) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.head) return null;
    if (!root) root = this.head;

    let current = root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max(root) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.head) return null;
    if (!root) root = this.head;

    let current = root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
  _deleteNode(root, key) {
    if (root == null) return root;
    if (key < root.key) root.left = this._deleteNode(root.left, key);
    else if (key > root.key) root.right = this._deleteNode(root.right, key);
    else {
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;
      root.key = min(root.right);
      root.right = this._deleteNode(root.right, root.key);
    }
    return root;
  }
}

module.exports = {
  BinarySearchTree,
};
