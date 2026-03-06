function fibs(num) {

    let fibArray = [0, 1]

    if (num == 1) return [0]
    if (num == 2) return [0, 1]


    for(let i = 0; i < num - 2; i++) {

        fibArray.push(fibArray[i] + fibArray[i + 1])
    }

    return fibArray
}

function fibsRec(num) {

    if (num <= 0) return []
    if (num == 1) return [0]
    if (num == 2) return [0, 1]

    let result = fibsRec(num - 1)

    let nextNumber = result[result.length - 1] + result[result.length - 2]

    result.push(nextNumber)

    return result
}

function mergeSort(arr) {

    /** how will it work
     * 
     * 1st: divide the array into sub-arrays until only 1 element left in each
     * 
     * 2nd: zip everything together
     * 
     * - pick 2 '1 element' arrays
     * - compare and put the smallest array first
     * - with an array bigger than one
     * - compare the fist element of both, the smallest goes first
     * - result: array sorted
     */

    if (arr.length <= 1) return arr

    const middleIndex = Math.floor(arr.length / 2)

    let leftHalf = arr.slice(0, middleIndex)
    let rightHalf = arr.slice(middleIndex)

    return merge(mergeSort(leftHalf), mergeSort(rightHalf))

    

}

function merge(left, right) {

    // merge 2 sorted arrays and return one full array sorted
    let finalArray = []
    let i = 0; // pointer for left arr
    let j = 0; // pointer for right arr

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            finalArray.push(left[i])
            i++
        } else {
            finalArray.push(right[j])
            j++
        }
    }

    return [...finalArray, ...left.slice(i), ...right.slice(j)]
}

export {fibs, fibsRec, mergeSort}