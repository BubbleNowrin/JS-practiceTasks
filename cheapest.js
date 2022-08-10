//show the cheapest one as output

let phones = [
    { name: 'samsung', camera: '23', price: '50000', color: 'black' },
    { name: 'iphone', camera: '27', price: '990000', color: 'black' },
    { name: 'oneplus', camera: '28', price: '40000', color: 'black' },
    { name: 'walton', camera: '244', price: '20000', color: 'black' },
    { name: 'xiaomi', camera: '34', price: '22000', color: 'black' },
    { name: 'HTC', camera: '14', price: '55000', color: 'black' }
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);