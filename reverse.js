//reverse a string 

function reverseString(text) {
    let reverse = '';
    for (i = text.length - 1; i >= 0; i--) {
        let element = text[i];
        reverse += element;
        // console.log(element, reverse);
    }
    return reverse;
}

let str = 'I am a good girl';
let reversed = reverseString(str);
console.log(reversed);