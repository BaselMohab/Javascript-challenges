// ==========================================
// Day 2 - JavaScript Challenges
// ==========================================


// ==========================================
// Challenge 1:  Write a JavaScript program to create a new string from a given string taking the first 3 characters and last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned
// ==========================================

const addingChar = (str) => {
    if (str.length < 3){
        return str
    }else{
        let firstPart = str.slice(0, 3)
        let secondPart = str.slice(-3)
        const updatedStr = `${firstPart}${secondPart}`
        return updatedStr
    }
}

console.log(addingChar('BaselMohab'))
console.log(addingChar('Ba'))


///////////////////////////////


// ==========================================
// Challenge 2:  Write a JavaScript program to extract out the characters at even position out of a sting half of its length
// ==========================================

const extractOutEven = (str) => {
    let newStr = ""
    for (let i = 0; i < str.length /2; i += 2){
        newStr += str[i]
    }
    return newStr
}

console.log(extractOutEven("baselmohab")) // bsl


///////////////////////////////


// ==========================================
// Challenge 3:  Write a JavaScript program to concatenate two strings except their first character
// ==========================================

// 1st solution low level JS
const addTwoStrs = (str1, str2) => {
    let newStr1 = ""
    let newStr2 = ""
    
    for (let i = 1; i < str1.length; i++ ){
        newStr1 += str1[i]
    }
    for (let j = 1; j < str2.length; j++){
            newStr2 += str2[j]
    }
        
    const lastStr = `${newStr1}${newStr2}`
    return lastStr
}

console.log(addTwoStrs("basel","mohab")) //aselohab

// 2nd solution advanced level js
const concStrs = (str1, str2) => {
    return str1.slice(1) + str2.slice(1)
}

console.log(concStrs("basel", "mohab")) // aselohab


///////////////////////////////


// ==========================================
// Challenge 4:  Write a JavaScript program to find out which one is nearest to 100
// ==========================================

const closeTo100 = (a, b) => {
    // Calculate the absolute difference from 100
    const diffA = Math.abs(100 - a);
    const diffB = Math.abs(100 - b);

    let flag = "";
    if (diffA < diffB) {
        flag = `${a} is closer to 100 than ${b}`;
    } else if (diffA > diffB) {
        flag = `${b} is closer to 100 than ${a}`;
    } else {
        flag = `${a} and ${b} are equally close to 100`;
    }
    return flag;
}

console.log(closeTo100(50, 70)); // 70 is closer to 100 than 50
console.log(closeTo100(80, 50)); // 80 is closer to 100 than 50
console.log(closeTo100(110, 90)); // 90 and 110 are equally close to 100


///////////////////////////////


// ==========================================
// Challenge 5:  Write a JavaScript program to check a given string contains 2 to 4 ocuurences of a specific character
// ==========================================

const countChars = (str, char) => {
    return str.split('').filter(ch => ch === char).length
}

const contains2To4 = (str, char) => {
    return countChars(str, char) >=2 && countChars(str,char) <=4
}

console.log(contains2To4("niice", "i")) // true
console.log(contains2To4("nice", "i"))  // false
console.log(contains2To4("niiice", "i"))  // true
console.log(contains2To4("niiiice", "i")) // true
console.log(contains2To4("niiiiice", "i")) // false









