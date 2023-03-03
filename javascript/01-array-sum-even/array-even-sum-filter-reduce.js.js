// 1) Implement a function that:
// a) takes an array of numbers and;
// b) returns the sum of all even numbers in the array.

const numbers = [1,2,3,4,5,6,7,8,9,10]

function sumEvenNumbers (num){

    const evenNumbersSum = (num.filter(num => num % 2 === 0)).reduce((acc, num)=>acc + num, 0)
    console.log(`The sum of all even numbers is: ${evenNumbersSum}`);

    return evenNumbersSum

}

sumEvenNumbers(numbers);