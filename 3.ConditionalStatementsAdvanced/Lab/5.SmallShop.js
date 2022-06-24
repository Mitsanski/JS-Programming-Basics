function solve(input) {
    let type = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let total = 0;

    switch (type) {
        case 'coffee':
            if (city == 'Sofia') {
                total = 0.5 * quantity;
            } else if (city == "Plovdiv") {
                total = 0.40 * quantity;
            } else if (city == 'Varna') {
                total = 0.45 * quantity
            }
            break;
        case 'water':
            if (city == 'Sofia') {
                total = 0.8 * quantity;
            } else if (city == "Plovdiv") {
                total = 0.7 * quantity;
            } else if (city == 'Varna') {
                total = 0.7 * quantity
            }
            break;
        case 'beer':
            if (city == 'Sofia') {
                total = 1.2 * quantity;
            } else if (city == "Plovdiv") {
                total = 1.15 * quantity;
            } else if (city == 'Varna') {
                total = 1.10 * quantity
            }
            break;
        case 'sweets':
            if (city == 'Sofia') {
                total = 1.45 * quantity;
            } else if (city == "Plovdiv") {
                total = 1.30 * quantity;
            } else if (city == 'Varna') {
                total = 1.35 * quantity
            }
            break;
        case 'peanuts':
            if (city == 'Sofia') {
                total = 1.60 * quantity;
            } else if (city == "Plovdiv") {
                total = 1.50 * quantity;
            } else if (city == 'Varna') {
                total = 1.55 * quantity
            }
            break;
        default:
            break;
    }
    console.log(total.toFixed(2));
}
solve(['coffee', 'Sofia', 2])