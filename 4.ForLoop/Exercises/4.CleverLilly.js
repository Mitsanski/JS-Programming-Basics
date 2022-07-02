function solve(input) {
    let age = Number(input[0]);
    let washer = Number(input[1]);
    let toyPrice = Number(input[2]);
    let brotherCount = 0;
    let total = 0;
    let toyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            total += (10 * i) / 2;
            brotherCount++;
        } else {
            toyCount++;
        }
    }
    total += toyCount * toyPrice;
    total -= brotherCount * 1;

    if (washer > total) {
        console.log(`No! ${(washer - total).toFixed(2)}`);
    } else {
        console.log(`Yes! ${(total - washer).toFixed(2)}`);
    }
}
solve(["21",
    "1570.98",
    "3"])

