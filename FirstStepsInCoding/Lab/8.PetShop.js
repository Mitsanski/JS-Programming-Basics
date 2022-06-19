function solve(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let dogTotal = 2.50 * dogFood;
    let catTotal = 4 * catFood;

    let total = dogTotal + catTotal;

    console.log(total);
}
solve(['5', '4'])
solve(['13', '9'])