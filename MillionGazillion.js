// var visited = {
//   'www.':{
//     'google.com': true,
//     'naver.com': true
//   }
// };

// var visited_2 = {
//   'www': {
//     '.com': {
//       'google': true
//     }
//   }
// }


// var visitedChecker = function(url) {

// }

// console.log(visitedChecker('www.google.com'));

function Trie() {
  this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function(url) {
  // body...
  var currentNode = this.rootNode;
  var isNew = false

  for (var i = 0; i < url.length; i++) {
    if(!currentNode.hasOwnProperty(url[i])) {
      currentNode[url[i]] = {};
    }
    currentNode = currentNode[url[i]];
  }

  if(!currentNode.hasOwnProperty('*')) {
    isNew = true;
    currentNode['*'] = {};
  }
  return isNew;
};

var trie = new Trie();

console.log(trie.checkPresentAndAdd('www.google.com'));
console.log(trie.checkPresentAndAdd('www.google.com'));
console.dir(JSON.stringify(trie));