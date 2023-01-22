import {maxArea} from './index';

type Params = [number[]];
type Result = number;
type TestCase = [Params, Result];

export const dataToTest: TestCase[]  = [
    [[[1, 8, 6, 2, 5, 4, 8, 3, 7]], 49],
    [[[1,1]], 1],
];

describe('Container With Most Water (Arrays)', () => {

    test.each(dataToTest)(
        '%#. Brute force',
        (params, result) => {
            expect(maxArea(...params)).toEqual(result);
        }
    );


});