//. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

function secondLargest(numbers) {

    let largest = numbers[0];
    let secondlargest = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number > largest) {
            secondlargest = largest;
            largest = number;
        }
        else if (number > secondlargest && number !== largest) {
            secondlargest = number;
        }

    }
    return secondlargest;
}

let numbers = [34, 33, 2, 56, 221, 67, 12, 45];
console.log(secondLargest(numbers));