// Reverse an array in place
// Example:
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]



// Count how many times a value appears
// Example:
// Input: ([1, 2, 2, 3, 2], 2)
// Output: 3


var countArray =  [1, 2, 2, 3, 2]; 

function countNum(arr, num) {
    var count = 0; 
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count += 1;

        }
    }

    return count; 
    
}


var result = countNum(countArray, 2);
console.log(result);






// Create a new array with only even numbers
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

var list = [1, 2, 3, 4, 5, 6]; 

function getEven(arr) {
    var evenArr = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]); 
        }
    }

    return evenArr; 

}

console.log(getEven(list)); 