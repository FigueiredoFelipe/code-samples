// ## 1 - Implement a function that:
// ## a) takes an array of numbers and;
// ## b) returns the sum of all even numbers in the array.


const numbers = [1,2,3,4,5]



function sumAllEvenNumbers(num){
    const sumEven = (num.filter(even => even %2 === 0)).reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)

    console.log(`The sum of all even numbers is: ${sumEven}`);

    return sumEven
}

sumAllEvenNumbers(numbers)