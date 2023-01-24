// [2, 7, 11, 15], 9]

/* Hashmap approach O(n)
Create O(1) access to each element of array via object structure
*/

export const twoSumHashmap = (arr, target) => {

    const hashmap = {};

    for (let i = 0; i < arr.length; i++) {
        hashmap[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        const requiredValue = target - arr[i];
        const hashmapIdx = hashmap[requiredValue];
        if (hashmapIdx !== undefined && i !== hashmapIdx) {
            return [i, hashmapIdx];
        }
    }

    return [];

};


/* Bruteforce approach O(n^2)
*/

export const twoSumBruteForce = (arr, target) => {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return [];

};