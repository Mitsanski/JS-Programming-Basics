function solve(input) {
    let vegPrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegKg = Number(input[2]);
    let fruitKg = Number(input[3]);

    let total = vegKg * vegPrice + fruitKg * fruitPrice;

    console.log((total / 1.94).toFixed(2));
}
solve([0.194, 19.4, 10, 10])