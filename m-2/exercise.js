/* 
* Exercise 1:
* write a function destructureExample
* given parameters object and an array
* destructuring object and an array
* return extracted object and value
*/
const destructureExample = (obj, arr) => {

    const { name, age } = obj; // destructuring object
    const [index0, , index2] = arr; //destructuring an array
    const result = { name, age, index0, index2 }; // make a new object 
    return result; // return extracted value
}
// input :
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = ['10', '20', '30', '40'];

const extracted = destructureExample(obj, arr);
console.log(`✅ Exercise-1: ${JSON.stringify(extracted)}`);

/* 
* Exercise 2:
* write a function sumNumbers 
* multiple numbers as paraments
* using the rest operator
* useing for loog
* return the sum
*/
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
const getSum = sum(1, 2, 3, 4, 5)
console.log(`✅ Exercise-2: ${getSum}`);
/* 
* Exercise 3:
* write a function createGreeting  
* given name as argument
* useing template literals
* return the sum
*/
const createGreeting = (name) => {
    return `Hello, ${name}! Welcome to our website.`;
}
const Greeting = createGreeting('Rahman')
console.log(`✅ Exercise-3: ${Greeting}`);

/* 
* Exercise 4:
* write a function createGreeting  
* given argument
* useing ternary operator
* return the sum
*/
const isEven = (number) => {
    return number % 2 == 0 ? 'Even' : 'Odd';
}
const getEven = isEven(7, 2)
console.log(`✅ Exercise-4: ${getEven}`);
/* 
* Exercise 5:
* Convert the following function to an arrow function
* function multiply(a, b) {return a * b;}
*/
const multiply = (a, b) => {
    return a * b;
}
const getMultiplu = multiply(7, 2)
console.log(`✅ Exercise-5: ${getMultiplu}`);


/* 
* Exercise 6:
* Make a function getLargestNumber
* return largestNumber
*/
function getLargestNumber(...number) {
    const largestNumber = Math.max.apply(null, number)
    //console.log(largestNumber);
}
function getLargestNumber(...value) {
    let [a, b] = value;
    return a > b || b < a ? a : 'NaN';
}
const getLarge = getLargestNumber(10, 5);
console.log(`✅ Exercise-6: ${getLarge}`);


/* 
* Exercise 7:
* make a function getAddressCity
* function multiply(a, b) {return a * b;}
*/
function getAddressCity(person) {
    const { city } = person;
    return city !== undefined ? city : "Unknown";
}
const address = { street: "123 Main St", country: "Bangladesh" };
const getAddersss = getAddressCity(address);
console.log(`✅ Exercise-7: ${getAddersss}`);


/* 
* Exercise 8:
* make a function doubleNumbers
* get doubleNumbers use array map  methods
* return doubleNumbers
*/
function doubleNumbers(numbers) {
    const doubledArray = numbers.map((number) => number * 2);
    return doubledArray;
}
const getDouble = doubleNumbers([1, 2, 3, 4, 5])
console.log(`✅ Exercise-8: ${getDouble}`);

/* 
* Exercise 9:
* make a function doubleNumbers
* get doubleNumbers use array map  methods
* return doubleNumbers
*/
function filterEvenNumbers(numbers) {
    const evenNumbersArray = numbers.filter((number) => number % 2 === 0);
    return evenNumbersArray;
}

/* function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
} */
const getEvenNumbers = filterEvenNumbers([1, 2, 3, 4, 5])
const result = '✅ Exercise-9: ' + getEvenNumbers;
console.log(result);


/* 
* Exercise 10:
* make a function sumArray 
* use array reduce for sum
* return sum
*/
function sumArray(numbers) {
    const sum = numbers.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
    }, 0);
    return sum;
}
const getTotal = sumArray([1, 2, 3, 4, 5])
console.log(`✅ Exercise-10: ${getTotal}`);

/* 
* Exercise 11:
* make a function sortNumber 
* use array sort methods
* return 
*/
function sortNumber(numbers) {
    return numbers.sort();
}
const getSort = sortNumber([5, 2, 3, 8, 1, 4])
console.log(`✅ Exercise-11: ${getSort}`);