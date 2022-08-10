// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.

function findLeapYear(Array) {
    let newArr = [];
    for (i = 0; i < Array.length; i++) {
        let index = Array[i];
        if (index % 4 === 0 && (index % 100 !== 0 || index % 400 === 0)) {
            newArr.push(index);
        }
    }
    return newArr;

}

let array = [2023, 2024, 2025, 2028, 2030, 2020, 2016];
console.log(findLeapYear(array));

