//if ticket number is less than 100, first 100 ticket price 100
//if ticket number is more than 100,less than 200, first 100 ticket 100, rest price 90tk
//if ticket number is more than 200,first 100 ticket 100, second 100 price 90tk,rest 70tk


function ticketPrice(quantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if (quantity <= 100) {
        totalcost = quantity * first100Rate;
        return totalcost;
    }
    else if (quantity <= 200) {
        let first100Price = 100 * first100Rate;
        let restPrice = second100Rate * (quantity - 100);
        let totalcost = first100Price + restPrice;
        return totalcost;
    }
    else {
        let first100Price = 100 * first100Rate;
        let second100Price = second100Rate * 100;
        let restPrice = (quantity - 200) * restRate;
        let totalcost = first100Price + second100Price + restPrice;
        return totalcost;
    }
}

let totalTicketCost = ticketPrice(120);
console.log(totalTicketCost);