class TrieNode {
  constructor() {
    this.childrens = {};
    this.endOfW = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (const ch of word) {
      if (!(ch in curr.childrens)) {
        curr.childrens[ch] = new TrieNode();
      }
      curr = curr.childrens[ch];
    }
    curr.endOfW = true;
  }

  search(word) {
    let curr = this.root;
    for (const ch of word) {
      if (!(ch in curr.childrens)) {
        return false;
      }
      curr = curr.childrens[ch];
    }
    return curr.endOfW;
  }

  startsWith(word) {
    let curr = this.root;
    for (let ch of word) {
      if (!(ch in curr.childrens)) {
        return false;
      }
      curr = curr.childrens[ch];
    }
    return true;
  }
}

const data = ['Trie', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'];

const trie = new Trie();
trie.insert('apple');
trie.search('apple'); // возвращает True
trie.search('app'); // возвращает False
trie.startsWith('app'); // возвращает True
trie.insert('app');
trie.search('app'); // возвращает True
