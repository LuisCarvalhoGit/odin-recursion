import { fibs, fibsRec, mergeSort } from "./scripts";

describe('Fibonacci sequence non-recursive', () => {

    test('with number 5', () => {
        expect(fibs(5)).toEqual([0, 1, 1, 2, 3])
    })
    test('with number 1', () => {
        expect(fibs(1)).toEqual([0])
    })
    test('with number 2', () => {
        expect(fibs(2)).toEqual([0, 1])
    })
    test('with number 8', () => {
        expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })
})

describe('Fibonacci sequence recursive', () => {

    test('with number 5', () => {
        expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3])
    })
    test('with number 1', () => {
        expect(fibsRec(1)).toEqual([0])
    })
    test('with number 2', () => {
        expect(fibsRec(2)).toEqual([0, 1])
    })
    test('with number 8', () => {
        expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })
})

describe('mergeSort', () => {
    test('sorts a random unsorted array', () => {
      expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
  
    test('handles an empty array', () => {
      expect(mergeSort([])).toEqual([]);
    });
  
    test('handles an array with one element', () => {
      expect(mergeSort([5])).toEqual([5]);
    });
  
    test('handles negative numbers', () => {
      expect(mergeSort([10, -5, 0, -2])).toEqual([-5, -2, 0, 10]);
    });
  });