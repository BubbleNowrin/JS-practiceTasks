// chair 3cft
//table 10cft
//bed 50cft

//quantity input
//show the total amount of wood required


function woodRequirement(chairQuantity, tableQuantity, bedQuantity) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    let chairWood = perChair * chairQuantity;
    let tableWood = perTable * tableQuantity;
    let bedWood = perBed * bedQuantity;

    let totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

let Totalwood = woodRequirement(1, 0, 0);
console.log(Totalwood);