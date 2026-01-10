// Find the largest number in an array
// Example:
// Input: [3, 9, 2, 5]
// Output: 9

var arr = [3, 9, 2, 5]; 

function findLargest(arr) {
    var largest = arr[0]; 

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; 
        }
    }
    return largest; 
}

var largestNum = findLargest(arr); 

console.log(largestNum);