//complex shopping cart problem to count the totalcost

let shoppingCart = [
    { name: 'shirt', price: 2200, quantity: 2 },
    { name: 'pant', price: 3200, quantity: 5 },
    { name: 'belt', price: 600, quantity: 3 },
    { name: 'shoe', price: 1200, quantity: 4 }
]

function totalCost(cart) {
    let sum = 0;
    for (i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemPrice = item.price * item.quantity;
        sum = sum + itemPrice;
    }
    return sum;
}

let expence = totalCost(shoppingCart);
console.log(expence);