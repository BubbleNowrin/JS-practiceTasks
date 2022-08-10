/*কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।  */

function primeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return 'not prime';
        }
    }
    return 'prime';

}
console.log(primeNumber(15));
