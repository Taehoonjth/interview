function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};
  
BinaryTreeNode.prototype.superbalanced = function() {
  var minDepth;
  var maxDepth;
  var leafChecker = function(node) {
    if(node.left === null && node.right === null) {
      //node is leaf
      if (minDepth > node.value) {
        minDepth = node.value;
        return;
      }
      if (maxDepth < node.value) {
        maxDepth = node.value;
        return;
      }
    }
    leafChecker(node.left);
    leafChecker(node.right);
  }
  leafChecker(this);
  return (maxDepth - minDepth) <= 1;
};

// var binaryTree = BinaryTreeNode(1);
