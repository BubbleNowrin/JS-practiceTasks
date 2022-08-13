function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);

}

// let num1 = 2;
// let num2 = 3;
// let num3 = 4;

console.log(sum(5));