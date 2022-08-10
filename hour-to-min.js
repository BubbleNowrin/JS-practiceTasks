// এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 

function hourToMinute(time) {
    let minute = time * 60;
    return minute;
}

let time = 3;
console.log(hourToMinute(time));