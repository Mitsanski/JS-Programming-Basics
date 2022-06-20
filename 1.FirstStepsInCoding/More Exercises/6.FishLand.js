function solve(input) {
    let meckerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoKg = Number(input[2]);
    let scadKg = Number(input[3]);
    let musselKg = Number(input[4]);

    let bonitoPrice = meckerelPrice + meckerelPrice * 0.60;
    let scadPrice = spratPrice + spratPrice * 0.80;

    let result = bonitoKg * bonitoPrice + scadKg * scadPrice + musselKg * 7.50;

    console.log(result.toFixed(2));
}
solve([6.90, 4.20, 1.5, 2.5, 1]);