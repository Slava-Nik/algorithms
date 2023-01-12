/*  Title: Longest Substring Without Repeating Characters
    Problem complexity: Medium
    LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

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

};














