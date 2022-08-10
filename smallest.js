//একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 


function smallestInArray(num) {

    let smallest = num[0];
    for (let i = 0; i <= num.length; i++) {
        let number = num[i];
        if (number < smallest) {
            smallest = number;
        }
    }
    return smallest;
}
let numbers = [226, 51, 75, 91, 23, 44, 155, 67, 89, 55, 100];
console.log(smallestInArray(numbers));
