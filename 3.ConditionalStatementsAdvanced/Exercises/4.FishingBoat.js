function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let total = 0;

    switch (season) {
        case 'Spring':
            total = 3000;
            if (fishermen <= 6) {
                total *= 0.90;
            } else if (fishermen >= 7 && fishermen <= 11) {
                total *= 0.85;
            } else if (fishermen >= 12) {
                total *= 0.75;
            }
            break;
        case 'Winter':
            total = 2600;
            if (fishermen <= 6) {
                total *= 0.90;
            } else if (fishermen <= 11) {
                total *= 0.85;
            } else if (fishermen >= 12) {
                total *= 0.75;
            }
            break;
        case 'Summer':
        case 'Autumn':
            total = 4200;
            if (fishermen <= 6) {
                total *= 0.90;
            } else if (fishermen >= 7 && fishermen <= 11) {
                total *= 0.85;
            } else if (fishermen >= 12) {
                total *= 0.75;
            }
            break;

        default:
            break;
    }

    if (fishermen % 2 == 0 && season != 'Autumn') {
        total *= 0.95;
    }

    if (budget > total){
        console.log(`Yes! You have ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva.`);
    }
}
solve(["2000",
"Winter",
"13"])
