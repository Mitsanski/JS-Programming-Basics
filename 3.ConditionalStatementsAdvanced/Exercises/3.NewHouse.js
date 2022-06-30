function solve(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let total = 0;

    switch (type) {
        case 'Roses':
            if (count > 80) {
                total = (count * 5) * 0.90;
            } else (
                total = (count * 5)
            )
            break;
        case 'Dahlias':
            if (count > 90) {
                total = (count * 3.80) * 0.85;
            } else (
                total = (count * 3.80)
            )
            break;
        case 'Tulips':
            if (count > 80) {
                total = (count * 2.80) * 0.85;
            } else {
                total = (count * 2.80)
            }
            break;
        case 'Narcissus':
            if (count > 120) {
                total = (count * 3) * 1.15
            } else (
                total = (count * 3)
            )
            break;
        case 'Gladiolus':
            if (count > 80) {
                total = (count * 2.50) * 1.20;
            } else (
                total = (count * 2.50)
            )
            break;
        default:
            break;
    }
    if (total > budget) {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - total).toFixed(2)} leva left.`);
    }
}
solve(['Gladiolus',
    64,
    160
    ])