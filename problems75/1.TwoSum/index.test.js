import {twoSumHashmap, twoSumBruteForce} from './index';

export const dataToTest = [
    [[[2, 7, 11, 15], 9], [0, 1]],
    [[[3, 2, 4], 6], [1, 2]],
    [[[3, 3], 6], [0, 1]],
    [[[1, 2, 4], 20], []]
];

describe('Two sum', () => {

    test.each(dataToTest)(
        '%#. Two sum hashmap',
        (params, result) => {
            expect(twoSumHashmap(...params)).toEqual(result);
        }
    );

    test.each(dataToTest)(
        '%#. Brute force, O(N^2)',
        (params, result) => {
            expect(twoSumBruteForce(...params)).toEqual(result);
        }
    );

});