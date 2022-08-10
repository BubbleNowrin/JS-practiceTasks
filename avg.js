//Write a function called make_avg() which will take an three integers and return the
//average of those values.

function make_avg(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let avg = sum / 3;
    return avg;
}

console.log(make_avg(10, 20, 30));