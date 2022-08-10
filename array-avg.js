//Challenging: Write a function called make_avg() which will take an array of integers and
//the size of that array and return the average of those values.

function make_avg(array, length) {
    let sum = 0;
    for (i = 0; i < length; i++) {
        let num = array[i];
        sum += num;
    }
    return sum / length;


}
let array = [10, 20, 40, 50, 60, 70, 30, 80];
console.log(make_avg(array, 3));