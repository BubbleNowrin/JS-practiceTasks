//word-based reverse of a string

function reverseString(text) {

    let words = text.split(' ');
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        reversed.push(word);

    }
    let reversedString = reversed.join(' ');
    return reversedString;
}

let str = 'ami akash pathabo tomar moner akashe';
console.log(reverseString(str));