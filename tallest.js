const heights = [165, 666, 190, 180, 170, 265, 180, 230, 555];
let largest = heights[0];
function maxInArray(height) {
    for (let i = 0; i < height.length; i++) {
        let tall = height[i];
        if (tall > largest) {
            largest = tall;
        }
    }
    return largest;
}

let tallest = maxInArray(heights);
console.log('tallest is: ', tallest);