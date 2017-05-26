function containsCycle(node) {
  var currentNode = node;
  var twiceFast = node;
  while (currentNode.next) {
    currentNode = currentNode.next;
    if (twiceFast.next) {
      if (twiceFast.next.next) {
        twiceFast = twiceFast.next.next;
      } else {
        return false;
      }
    } else {
      return false;
    }
    if (currentNode === twiceFast) {
      return true;
    }
  }

  return false;
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode(5);
var b = new LinkedListNode(1);
var c = new LinkedListNode(9);

a.next = b;
b.next = c;
// c.next = a;

console.log(containsCycle(a))