/*

 1. reverse method in js
 2. create reversed string via for loop and compare with the initial one.
 3. via half loop iteration, by checking if first letter equals the last one (the most efficient)
 3. recursively remove two letters from start and end and compare them.
*/

export const isPalindromeReverse = (str) => {
    return str === str.split('').reverse().join('');
};

export const isPalindromeViaLoop = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
};

export const isPalindromeViaHalfLoop = (str) => {
    if(str.length <= 1) return true;
    if (str[0] !== str.at(-1)) return false;
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
};

export const isPalindromeViaRecursion = (str) => {
    if(str.length <= 1) return true;
    if (str[0] === str.at(-1)) {
        return isPalindromeViaRecursion(str.slice(1, str.length - 1));
    } else {
        return false;
    }
};