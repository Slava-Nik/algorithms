
/* 1. Plan: sliding window O(n)

Sliding window. start = 0, end = 0; And Set of sliding window characters;
If char doesn't exist in current window - add it. And increment end. Update the longest
If char exists, delete first character from sliding window and increment start.

*/


export const lengthOfLongestSubstring = function (str) {
    let longest = '';
    let start = 0;
    let end = 0;

    let charWindow = new Set();

    while (end < str.length) {
        let char = str[end];

        if (!charWindow.has(char)) {
            charWindow.add(char);
            end++;

            if (end - start > longest.length) {
                longest = str.slice(start, end);
            }
        } else {
            charWindow.delete(str[start]);
            start++;
        }
    }
    return longest;
}


/* 2. Plan brute force O(n^3)

Two loops with all substrings
Check if str has only unique symbols

*/


export const lengthOfLongestSubstringByBruteForce = function (str) {
    if (str.length === 1) return str;

    let longest = "";

    const iSubstrHasUniqueCharacters = (substr) => {
        const hashmap = {};
        for (let i = 0; i < substr.length; i++) {
            if (hashmap[substr[i]]) return false;
            hashmap[substr[i]] = true;
        }
        return true;
    };
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {

            if (j - i > longest.length) {
                let substr = str.slice(i, j);
                if (iSubstrHasUniqueCharacters(substr)) {
                    longest = substr;
                } else {
                    break;
                }
            }

        }
    }
    return longest;

}

/*
My first solution
Create new substring every iteration of the loop
Data structure of substrings is object. {indexOfFirstSymbol: Set(symbols in substr)}

If repeated symbol appears - check all substrings with longest and remove it from list. Update longest.
By the end of loop we'll get the largest substr


let longestSubstrSet = new Set();
let substrings = {};

const updateLongestIfNeeds = (substrSet) => {
    if (substrSet.size > longestSubstrSet.size) {
        longestSubstrSet = substrSet;
    }
};

for (let i = 0; i < s.length; i++) {

    // check all substrings, update longest
    for (let substrIdx in substrings) {
        if (substrings.hasOwnProperty(substrIdx)) {
            const substrSet = substrings[substrIdx];
            if (!substrSet.has(s[i])) {
                substrSet.add(s[i]);
            } else {
                delete substrings[substrIdx];
                substrings[i] = new Set([s[i]]);
            }
            updateLongestIfNeeds(substrSet);
        }
    }

    // create new substring as a set
    substrings[i] = new Set([s[i]]);
    if(longestSubstrSet.size === 0) longestSubstrSet = substrings[i];
}

console.log(longestSubstrSet);
return [...longestSubstrSet.values()].join("");


 */












