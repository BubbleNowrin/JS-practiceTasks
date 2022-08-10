//58) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
// Has return + Has parameter
//No return + Has parameter

// approach 1:
function odd_even(number) {
    if (number % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

//approach 2:

function odd_even(number) {
    if (number % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

(odd_even(11));