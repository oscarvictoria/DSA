// Change all values in an array to a given element
// Example:
// Input: ([1, 2, 3], 0)
// Output: [0, 0, 0]


var arr = [1, 2, 3]; 

function replaceAll(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = num; 
    }
    return arr;

}

console.log(replaceAll(arr, 2)); 

