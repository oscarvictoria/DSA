//  Replace a value at a given index
// Example:
// Input: ([10, 20, 30], index = 1, value = 99)
// Output: [10, 99, 30]

function replace(arr, index, value) {
    arr[index] = value; 
    return arr
    
}

var arr =  [10, 99, 30]

console.log(replace(arr, 0, 2));

