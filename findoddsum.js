// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function findOddSum(number) {
    let oddNumbers = [];
    sum = 0;
    for (i = 0; i < number.length; i++) {
        let oddNumber = number[i];
        if (oddNumber % 2 != 0) {
            oddNumbers.push(oddNumber);
            sum += oddNumber;
        }
    }
    console.log(oddNumbers);
    return sum;
}

let numbers = [5, 7, 8, 10, 45, 30, 3, 11, 12, 16];
console.log(findOddSum(numbers));