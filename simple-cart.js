let shoppingCart = [
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3200 },
    { name: 'belt', price: 600 },
    { name: 'shoe', price: 1200 }
]

function totalCost(cart) {
    let sum = 0;
    for (i = 0; i < cart.length; i++) {
        let item = cart[i];
        sum = sum + item.price;
    }
    return sum;
}

let expence = totalCost(shoppingCart);
console.log(expence);