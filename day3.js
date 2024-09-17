
// ==========================================
// Day 1 - JavaScript Challenges
// ==========================================


// ==========================================
// Challenge 1: Write a js program to count number of even digits in array of integers
// ==========================================

const countEvenNumber = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++
        }
        
    }
    return count
}

console.log(countEvenNumber([1,2,3,4,5,6])) //3
console.log(countEvenNumber([2,2,2,4,5])) // 4
console.log(countEvenNumber([3,5,7,9]))// 0


///////////////////////////////



// ==========================================
// Challenge 2: Write a js program to find number of even value for a given numner
// ==========================================

// create a function to create an array first
const createArr = (num) => {  
    let arr = [];  
    for (let i = 1; i <= num; i++) {  
        arr.push(i);  
    }  
    return arr;  
} 


const countEven = (arr) => {  
    return arr.filter((num) => num % 2 === 0).length;  
}  

console.log(countEven(createArr(5))); // 2


///////////////////////////////


// ==========================================
// Challenge 3: Write a js program to check if the given numbers in array is in ascending or descending order
// ==========================================
const checkAsending = (arr) => {
    let flag
    for ( let i = 1; i < arr.length; i ++){
        if ( arr[i] < arr[i + 1] ){
            flag = "asending"
        }else{
            flag = "descending"
        }
        return flag
    }
}

console.log(checkAsending([2,5,2,13])) // descending
console.log(checkAsending([1,2,3,4,5])) // asending


///////////////////////////////

// ==========================================
// Challenge 4: Write a js program to get the largest even number in array of integers
// ==========================================

const largerstEven = (arr) => {
    let num = 5 // assuming that the largest number is 5
    for ( let i = 0; i <= arr.length; i++){
        if (arr[i] > num){
            num = arr[i]
        }
    }
    return num
}

console.log(largerstEven([1,2,4,6,7,5])) // 7
console.log(largerstEven([1,2,4,6,5])) // 6
console.log(largerstEven([1,2,4,5])) // 5

///////////////////////////////


// ==========================================
// Challenge 5: Write a js program to replace digit/s in string with $
// ==========================================

const replaceDigits = (str) => {
    return str.replace(/\d/g, '$');
}

console.log(replaceDigits("hello123world")) // "hello$$$world"

///////////////////////////////




