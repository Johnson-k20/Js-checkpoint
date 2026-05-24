

// reversing a string:
example;
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("hello"));

// let reversed = ""; creates empty string to store reversed result
// for loop iterates from end of string to start, appending characters to reversed
// returns the fully reversed string at the end
//reversed += str[i]; adds current character to the reversed string during each iteration

//  Count characters

function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("hello"));

// .length- property returns the total number of characters in the string, including spaces and punctuation.
//spaces are counted too


 // Capitalize words
  //capitalizes the first letter of each word in a sentence

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalizeWords("hello world"));

 //split(" ") - splits the sentence into an array of words
 //word[0].toUpperCase() - capitalizes the first letter of each word
 //word.slice(1) - gets the rest of the word after the first letter
 //join(" ") - joins the array of capitalized words back into a single string with spaces in between



 //maximum and minimum 

 function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}



//...arr - the spread operator is used to unpack the elements of the array as individual arguments to the Math.max and Math.min functions, allowing them to find the maximum and minimum values in the array respectively.
//math.max and math.min are built-in functions that return the largest and smallest numbers from a set of arguments, respectively. By using the spread operator, we can easily find the max and min values in an array without needing to loop through it manually.
console.log(findMax([45, 23, 67, 12]));
console.log(findMin([45, 23, 67, 12]));

///sum of array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

//reduce() method executes a reducer function on each element of the array, resulting in a single output value. In this case, the reducer function takes an accumulator (sum) and the current number (num) and adds them together, starting with an initial value of 0. This effectively sums up all the numbers in the array.
console.log(sumArray([45, 23, 67, 12]));



//filter array (only elements that match condition)

function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}

//modulus operator returns a reminder




//multiplying a number by all positive integers less than itself (factorial)

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//iterates from 2 to n, multiplying result by each integer, effectively calculating n! (n factorial)



//prime number check- if a number is divisible by only one and itself

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

//checks if num is less than 2 (not prime), then iterates from 2 to num-1, checking if num is divisible by any of those numbers. If it is, returns false (not prime). If it passes all checks, returns true (is prime).
console.log(isPrime(17));
console.log(isPrime(15));


//fibonacci sequence- each number is the sum of the two preceding ones



function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    } 
    return sequence.slice(0, n);
}


//initializes sequence with first two numbers (0 and 1), then iterates from 2 to n-1, calculating each new number as the sum of the previous two and adding it to the sequence. Finally, returns the first n numbers of the sequence.
console.log(fibonacci(10));

