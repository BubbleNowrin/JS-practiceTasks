// কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function numberToGrade(number) {
    if (number >= 80 && number <= 100) {
        return 'A+';
    }
    else if (number >= 70 && number <= 79) {
        return 'A';
    }
    else if (number > 60 && number <= 69) {
        return 'A-';
    }
    else if (number > 50 && number <= 59) {
        return 'B';
    }
    else if (number > 40 && number <= 49) {
        return 'C';
    }
    else {
        return 'fail';
    }
}

let num = 88;
console.log(numberToGrade(num));