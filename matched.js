// let numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// for (const number of numbers) {
//     console.log(number);
// }

const products = [{ id: 1, name: 'walton phone', price: 1900 },
{ id: 2, name: 'walton phone', price: 1900 },
{ id: 3, name: 'iphone', price: 1900 },
{ id: 4, name: 'xiaomi phone', price: 1900 },
{ id: 5, name: 'walton laptop', price: 1900 },
{ id: 6, name: '1 phone', price: 1900 }]

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes('laptop'.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);