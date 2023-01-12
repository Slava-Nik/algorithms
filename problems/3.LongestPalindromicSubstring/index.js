/*  Title: Longest Palindromic Substring
    Problem complexity: Medium
    LeetCode: https://leetcode.com/problems/longest-palindromic-substring/
*/

import {isPalindromeViaHalfLoop} from "./isPalindrome";


/*
    Brute force solution O(N^3)
*/

export const getLongestPalindromicSubstrBruteForce = (str) => {
    let longestPalindromic = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            if (j - i <= longestPalindromic.length) continue;
            const substr = str.slice(i, j);
            if (isPalindromeViaHalfLoop(substr)) {
                longestPalindromic = substr;
            }
        }
    }
    return longestPalindromic;
};


// Odd and Even palindrome solution (Most efficient, according to the tests)

// For "bazdadx" - we should get Odd "dad"
// We iterate every letter and expand to left and right to find a palindrome.

// For "baddad" - we should get Even "adda"
// We iterate by 2 letters and expand to left and right.
// But we also should take into account, "cbbd" - "bb" case. Here we need to traverse loop starting from index 1.

export const getLongestPalindromicSubstrOddEven = (str) => {
    const strlen = str.length;
    let longestPalindrome = '';

    //Edge case
    if (strlen <= 1) return str;

    const expandLeft = (idx) => {
        if (idx >= 0) return str[idx];
        return null;
    }

    const expandRight = (idx) => {
        if (idx < str.length) return str[idx];
        return null;
    }

    const updateLongestPalindromeIfNeeds = (palindrome) => {
        if (palindrome.length > longestPalindrome.length) {
            longestPalindrome = palindrome;
        }
    }

    const searchForOddPalindrome = () => {
        outerLoop:for (let i = 0; i < strlen - 1; i++) {
            let currentPalindrome = str[i];
            let j = 1;
            while (j < strlen) {
                let left = expandLeft(i - j);
                let right = expandRight(i + j);
                if (left !== null && left === right) {
                    currentPalindrome = left + currentPalindrome + right;
                    j++;
                    updateLongestPalindromeIfNeeds(currentPalindrome);
                } else {
                    updateLongestPalindromeIfNeeds(currentPalindrome);
                    continue outerLoop;
                }
            }
        }
    };

    const searchForEvenPalindrome = ({start = 0}) => {
        outerLoop:for (let i = start; i < strlen - 1; i += 2) {
            if (str[i] !== str[i + 1]) continue;
            let currentPalindrome = `${str[i]}${str[i + 1]}`;
            let j = 1;
            while (j < strlen) {
                let left = expandLeft(i - j);
                let right = expandRight(i + j + 1);
                if (left !== null && left === right) {
                    currentPalindrome = left + currentPalindrome + right;
                    j++;
                    updateLongestPalindromeIfNeeds(currentPalindrome);
                } else {
                    updateLongestPalindromeIfNeeds(currentPalindrome);
                    continue outerLoop;
                }
            }
        }
    };


    searchForOddPalindrome();
    searchForEvenPalindrome({start: 0});
    searchForEvenPalindrome({start: 1});

    return longestPalindrome;
};