import {removeNthFromEnd} from './index';
import {LinkedList} from "../../utils/lists";

type Params = [LinkedList, number];
type Result = LinkedList | [];
type TestCase = [Params, Result];

export const dataToTest: TestCase[] = [
    [[new LinkedList({arr: [1, 2, 3, 4, 5]}), 2], new LinkedList({arr: [1, 2, 3, 5]})],
    [[new LinkedList({arr: [1]}), 1], []],
    [[new LinkedList({arr: [1, 2]}), 1], new LinkedList({arr: [1]})],

];

describe('Remove Nth Node From End of List (Lists)', () => {

    test.each(dataToTest)(
        '%#. Fast and slow pointer solution',
        (params, result) => {
            const output = removeNthFromEnd(...params).getArrayFromList();
            const expected = (result instanceof LinkedList) ? result.getArrayFromList() : [];
            expect(output).toEqual(expected);
        }
    );
});