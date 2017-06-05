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

var a = new BinaryTreeNode(50);
var b = a.insertLeft(30);
var c = a.insertRight(80);
var d = b.insertLeft(20);
var e = b.insertRight(40);
var f = c.insertLeft(70);
var g = c.insertRight(90);
var h = d.insertLeft(10);
var i = f.insertLeft(60);
var j = g.insertLeft(85);
var k = g.insertRight(100);

console.log(a);

function treeToArrayDFS(node) {
  var result = [];
  function inner(node) {
    result.push(node.value);
    if (node.left) {
      inner(node.left);
    }
    if (node.right) {
      inner(node.right);
    }
  }
  inner(node);
  return result;
}


function treeToArrayBFS(node) {
  var result = [];
  // var currentNode = node;
  function inner(node) {
    if (node === null) {
      return;
    }
    result.push(node.value);
    if (node.left) {
      result.push(node.left.value);
    }
    if (node.right) {
      result.push(node.right.value);
    }
    inner(node.left);
    inner(node.right);
  }
  inner(node);
  return result;
}
console.log(treeToArrayDFS(a));
console.log(treeToArrayBFS(a));