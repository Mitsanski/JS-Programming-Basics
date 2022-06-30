function solve(input) {
    let nights = Number(input[0]) - 1;
    let type = input[1];
    let feedback = input[2];
    let total = 0;

    switch (type) {
        case 'room for one person':
            total = nights * 18;
            break;
        case 'apartment':
            if (nights < 10) {
                total = (nights * 25) * 0.70;
            } else if (nights >= 10 && nights < 15) {
                total = (nights * 25) * 0.65;
            } else {
                total = (nights * 25) * 0.50;
            }
            break;
        case 'president apartment':
            if (nights < 10) {
                total = (nights * 35) * 0.90;
            } else if (nights >= 10 && nights < 15) {
                total = (nights * 35) * 0.85;
            } else {
                total = (nights * 35) * 0.80;
            }

        default:
            break;
    }
    if (feedback == 'positive') {
        total *= 1.25;
    } else if (feedback == 'negative') {
        total *= 0.90;
    }
    console.log(total.toFixed(2));
}
solve(["2",
"apartment",
"positive"])


