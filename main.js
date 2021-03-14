function longestWord(word_list) {
    let longestWord = '';
    for (var element of word_list) {
        if (element.length > longestWord.length) {
            longestWord = element;
        }
    }
    return longestWord;
};

function mapWord(word) {
    let map = {};
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (map[letter]) {
            map[letter].push(i);
        } else {
            map[letter] = [i];
        }
    }
    return map;
};

function findNextIndex(array, minIndex) {
    for (var element of array) {
        if (element >= minIndex) {
            return element + 1;
        }
    }
    return false;
};

function isSubsequence(word, map) {
    let minIndex = 0;
    for (let letter of word) {
        if (map[letter]) {
            minIndex = findNextIndex(map[letter], minIndex);
            if (minIndex == false) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

function longestMatch(word, word_list) {
    let mappedWord = mapWord(word);
    let subsequences = [];
    for (var element of word_list) {
        if (isSubsequence(element, mappedWord)) {
            subsequences.push(element);
        }
    }
    let longestSubsequence = longestWord(subsequences);
    return longestSubsequence;
};

console.log(longestMatch(stringSequence, dictionary));
