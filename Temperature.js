// তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
// একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function celciusToFahrenheit(temperature) {
    let fahrenheitTemp = (temperature * 1.8) + 32;
    return fahrenheitTemp;
}

function fahrenheitToCelcius(temperature) {
    let celciusTemp = (temperature - 32) * (5 / 9);
    return celciusTemp.toFixed(2);
}

let celcius = 56;
let fahrenheit = 132.8;
console.log(celciusToFahrenheit(celcius));
console.log(fahrenheitToCelcius(fahrenheit));