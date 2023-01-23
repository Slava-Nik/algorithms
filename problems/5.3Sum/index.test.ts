import {threeSumBruteForce, threeSumN2} from './index';

type Params = [number[]];
type Result = number[][];
type TestCase = [Params, Result];

export const dataToTest: TestCase[] = [
    [[[-1, 0, 1, 2, -1, -4]], [[-1, -1, 2], [-1, 0, 1]]],
    [[[0, 1, 1]], []],
    [[[0, 0, 0]], [[0, 0, 0]]]
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
            const resultArr = threeSumN2(...params).map(arr => {
                return arr.sort();
            }).sort();

            expect(expectArr).toEqual(resultArr);
        }
    );


});