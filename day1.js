// ==========================================
// Day 1 - JavaScript Challenges
// ==========================================


// ==========================================
// Challenge 1: Write a program to extract the extension of a file
// ==========================================

const getExtension = (str) => {
    return str.slice(str.lastIndexOf('.'))
}

// Testing getExtension function
console.log(getExtension("faasf.html"))  // Expected output: .html
console.log(getExtension("faasf.html.js"))  // Expected output: .js

///////////////////////////////


// ==========================================
// Challenge 2: Write a program to check if two numbers are equal to 100 or if their sum is 100
// ==========================================

const isEqualtTo100 = (a, b) => {
    return a === 100 || b === 100 || a + b === 100
}

// Testing isEqualtTo100 function
console.log(isEqualtTo100(100, 0))  // Expected output: true
console.log(isEqualtTo100(0, 100))  // Expected output: true
console.log(isEqualtTo100(50, 50))  // Expected output: true

///////////////////////////////


// ==========================================
// Challenge 3: Write a program to move characters to the next character
// ==========================================

const moveForward = (str) => {  
    return str.split('').map(char => {  
        if (char === 'z') {  
            return 'z';  // Stay at 'z'  
        } else {  
            return String.fromCharCode(char.charCodeAt(0) + 1);  // Move to the next character  
        }  
    }).join('');  
}  

// Testing moveForward function
console.log(moveForward('abc'));  // Expected output: 'bcd'  
console.log(moveForward('xyz'));  // Expected output: 'yza'  
console.log(moveForward('z'));    // Expected output: 'z'  
console.log(moveForward('zz'));   // Expected output: 'zz'  

///////////////////////////////


// ==========================================
// Challenge 4: Write a program to get the current date in format dd/MM/yyyy
// ==========================================

const formateDate = (date = new Date()) => {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    
    return `${day}/${month}/${year}`
}

// Testing formateDate function
console.log(formateDate())  // Expected output: Current date in format dd/MM/yyyy

///////////////////////////////


// ==========================================
// Challenge 5: Write a program to add the word "New" to the beginning of a string if it does not already exist
// ==========================================

const addNew = (str) => {
    return str.IndexOf('New') === 0 ? str : `New ! ${str}`
}

// Testing addNew function
console.log(addNew("New Offers"))  // Expected output: 'New Offers'
console.log(addNew("Offers"))      // Expected output: 'New ! Offers'

