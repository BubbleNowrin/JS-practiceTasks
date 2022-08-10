let names = ['abul', 'babul', 'kabul', 'chabul', 'dabul', 'abul', 'kabul', 'gabul', 'fabul', 'chabul'];

function removeDuplicate(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }

    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
