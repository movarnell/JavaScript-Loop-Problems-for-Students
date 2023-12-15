// The following are examples of answers to the problems in the problems.js file. These are not the only answers. There are many ways to solve each problem. These are just examples of how the problems can be solved. Please attempt to solve the problems on your own before looking at the answers, as you will learn more by solving them yourself.
// It is of note to mention that you must call the functions in order to see the results. For example, if you want to see the sum of numbers from 1 to 100, you must call the sumOfNumbers function and pass in a number as an argument. The same goes for all of the other functions. You must call them and pass in the appropriate arguments in order to see the results.
// Now for some of the following answers you will see an array method instead of a loop used. I will also show how to do the same thing with a loop. 

// Problem 1: Sum of Numbers
function sumOfNumbers(n) {
    return n * (n + 1) / 2;
}

// Problem 2: List of Even Numbers
function listEvenNumbers(n) {
    let evenNumbers = [];
    for (let i = 2; i <= n; i += 2) {
        evenNumbers.push(i);
    }
    return evenNumbers;
}

// Problem 3: Character Count in a String
function characterCount(str, character) {
    return str.split('').filter(char => char === character).length;
}

// Loop version
function characterCount(str, character) {
    let count = 0;
    for (let char of str) {
        if (char === character) {
            count++;
        }
    }
    return count;
}

// Problem 4: List of Prime Numbers
function listPrimeNumbers(n) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }

    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Problem 5: Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Loop version
function reverseString(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// Problem 6: Fibonacci Sequence
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

// Problem 7: Find the Maximum Number in an Array
function findMax(arr) {
    return Math.max(...arr);
}
// Loop version
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }
    return max;
}

// Problem 8: Nested Loop - Multiplication Table
function multiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

// Problem 9: Check for Palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
// Loop version
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
}

// Problem 10: Factorial of a Number
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Problem 11: Sum of Digits
// Given a number, find the sum of its digits.
function sumOfDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
// Loop version
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

// Problem 12: List Multiples of a Number
// Create an array listing the first n multiples of a given number.
function listMultiples(number, n) {
    return Array.from({ length: n }, (_, index) => (index + 1) * number);
}
// Loop version
function listMultiples(number, n) {
    let multiples = [];
    for (let i = 1; i <= n; i++) {
        multiples.push(i * number);
    }
    return multiples;
}

// Problem 13: Count Down Timer
// Create a countdown that logs numbers from a given number n down to 0.
function countDown(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}

// Problem 14: Array Element Count
// Count the number of times a specific element appears in an array.
function elementCount(array, element) {
    return array.filter(el => el === element).length;
}
// Loop version
function elementCount(array, element) {
    let count = 0;
    for (let el of array) {
        if (el === element) count++;
    }
    return count;
}

// Problem 15: Sorting an Array
// Implement a basic sorting algorithm (like Bubble Sort) to sort an array of numbers.
function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

// Problem 16: Finding Duplicates in an Array
// Identify duplicate values in a given array and list them.
function findDuplicates(array) {
    const seen = new Set();
    const duplicates = new Set();
    array.forEach(item => {
        if (seen.has(item)) {
            duplicates.add(item);
        }
        seen.add(item);
    });
    return Array.from(duplicates);
}

// Problem 17: Character Frequency in a String
// Calculate and log the frequency of each character in a given string.
function characterFrequency(string) {
    const frequency = {};
    for (let char of string) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

// Problem 18: Intersection of Two Arrays
// Find and return the common elements (intersection) of two arrays.
function intersection(array1, array2) {
    return array1.filter(value => array2.includes(value));
}
// Loop version
function intersection(array1, array2) {
    const common = [];
    for (let value of array1) {
        if (array2.includes(value)) {
            common.push(value);
        }
    }
    return common;
}

// Problem 19: Matrix Diagonal Sum
// Calculate the sum of the diagonals in a 2D matrix.
function diagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
        if (i !== matrix.length - 1 - i) {
            sum += matrix[i][matrix.length - 1 - i];
        }
    }
    return sum;
}

// Problem 20: Array Flattening
// Flatten a nested array (an array of arrays) into a single-level array.
function flattenArray(nestedArray) {
    return nestedArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
// Loop version
function flattenArray(nestedArray) {
    const flattened = [];
    for (let item of nestedArray) {
        if (Array.isArray(item)) {
            flattened.push(...flattenArray(item));
        } else {
            flattened.push(item);
        }
    }
    return flattened;
}
