class Trie {
  constructor() {
    this.next = {};
    this.last = false;
  }
}

var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let curr = this.root;
  let i = 0;
  while (i < word.length) {
    if (!(word[i] in curr)) {
      curr[word[i]] = new Trie();
    }
    if (!curr[word[i]].last) {
      curr[word[i]].last = i === word.length - 1;
    }
    curr = curr[word[i]].next;

    i++;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const search = (curr, i) => {
    if (i === word.length - 1 && word[i] in curr && curr[word[i]].last) {
      return true;
    }

    if (i >= word.length - 1) {
      return false;
    }

    if (word[i] === '.') {
      if (i === word.length - 1 && Object.keys(curr).some(key => curr[key].last)) return true;
      return Object.keys(curr).some(key => search(curr[key].next, i + 1));
    }

    if (!(word[i] in curr)) {
      return false;
    } else {
      return search(curr[word[i]].next, i + 1);
    }
  };

  return search(this.root, 0);
};

// Лучшее решение
// var WordDictionary = function () {
//   this.dictionary = Array.from({ length: 25 }, () => new Set());
// };

// WordDictionary.prototype.addWord = function (word) {
//   this.dictionary[word.length - 1].add(word);
// };

// WordDictionary.prototype.search = function (word) {
//   const wordSet = this.dictionary[word.length - 1];
//   if (wordSet.has(word)) {
//     return true;
//   }

//   if (word.includes('.')) {
//     const chars = [...word];
//     for (const potentialWord of wordSet) {
//       if (chars.every((char, i) => char === potentialWord[i] || char === '.')) {
//         return true;
//       }
//     }
//     return false;
//   }

//   return false;
// };

// const wordDictionary = new WordDictionary();
// wordDictionary.addWord('bad');
// wordDictionary.addWord('dad');
// wordDictionary.addWord('mad');
// wordDictionary.search('pad'); // return False
// wordDictionary.search('bad'); // return True
// wordDictionary.search('.ad'); // return True
// wordDictionary.search('b..'); // return True

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const wordDictionary = new WordDictionary();
// wordDictionary.addWord('at');
// wordDictionary.addWord('and');
// wordDictionary.addWord('an');
// wordDictionary.addWord('add');
// wordDictionary.search('a'); // return false
// wordDictionary.search('.at'); // return false
// wordDictionary.addWord('bat');
// wordDictionary.search('.at'); // return True
// wordDictionary.search('an.'); // return True
// wordDictionary.search('a.d.'); // return false
// wordDictionary.search('b.'); // return false
// wordDictionary.search('a.d'); // return True
// wordDictionary.search('.'); // return false

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const wordDictionary = new WordDictionary();
wordDictionary.addWord('a');
wordDictionary.addWord('ab');
wordDictionary.search('a'); // return true
