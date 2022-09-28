function sum(...args) {
    let total = 0;
    for (let x of args) {
        total += x;
    }

    return total;
}

console.log(sum(1, 3, 5, 7));
