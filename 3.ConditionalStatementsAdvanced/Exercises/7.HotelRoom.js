function solve(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let totalStudio = 0;
    let totalApt = 0;

    switch (month) {
        case 'May':
        case 'October':
            if (nights > 7 && nights <= 14) {
                totalStudio = (nights * 50) * 0.95;
                totalApt = nights * 65;
            } else if (nights > 14) {
                totalStudio = (nights * 50) * 0.70;
                totalApt = (nights * 65) * 0.90;
            } else {
                totalStudio = nights * 50;
                totalApt = nights * 65;
            }
            break;
        case 'June':
        case 'September':
            if (nights > 14) {
                totalStudio = (nights * 75.20) * 0.80;
                totalApt = (nights * 68.70) * 0.90;
            } else {
                totalStudio = nights * 75.20;
                totalApt = nights * 68.70;
            }
            break;
        case 'July':
        case 'August':
            if (nights > 14) {
                totalStudio = nights * 76;
                totalApt = (nights * 77) * 0.90
            } else {
                totalStudio = nights * 76;
                totalApt = nights * 77;
            }
            break;
        default:
            break;
    }
    console.log(`Apartment: ${totalApt.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);
}