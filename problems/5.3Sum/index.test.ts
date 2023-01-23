import {threeSumBruteForce, threeSumHashmap, threeSumTwoPointers} from './index';

type Params = [number[]];
type Result = number[][];
type TestCase = [Params, Result];

export const dataToTest: TestCase[] = [
    [[[-1, 0, 1, 2, -1, -4]], [[-1, -1, 2], [-1, 0, 1]]],
    [[[0, 1, 1]], []],
    [[[0, 0, 0, 0]], [[0, 0, 0]]],
    [[[-1,0,1,2,-1,-4,-2,-3,3,0,4]], [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]],
    [[[4, 0, 2, 3, -1]], []]
];

describe('3Sum (Arrays)', () => {

    test.each(dataToTest)(
        '%#. Brute force N^3',
        (params, result) => {
            const expectArr = result.map(arr => {
                return arr.sort();
            }).sort();
            const resultArr = threeSumBruteForce(...params).map(arr => {
                return arr.sort();
            }).sort();
            expect(expectArr).toEqual(resultArr);
        }
    );

    test.each(dataToTest)(
        '%#. Brute force + hashmap N^2',
        (params, result) => {
            const expectArr = result.map(arr => {
                return arr.sort();
            }).sort();
            const resultArr = threeSumHashmap(...params).map(arr => {
                return arr.sort();
            }).sort();

            expect(expectArr).toEqual(resultArr);
        }
    );

    test.each(dataToTest)(
        '%#. Two pointers N^2',
        (params, result) => {
            const expectArr = result.map(arr => {
                return arr.sort();
            }).sort();
            const resultArr = threeSumTwoPointers(...params).map(arr => {
                return arr.sort();
            }).sort();

            expect(expectArr).toEqual(resultArr);
        }
    );


});