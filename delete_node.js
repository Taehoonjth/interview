function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

function deleteNode(node) {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    throw new Error('this is the last node')
  }
}

deleteNode(b);

console.log(a);
