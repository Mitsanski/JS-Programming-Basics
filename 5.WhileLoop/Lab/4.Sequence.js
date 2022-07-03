function solve(input) {
    let n = Number(input[0]);
    let total = 1;

    while (n >= total) {
        console.log(total);
        total = ((total * 2) + 1)
    }
}
solve(['31'])