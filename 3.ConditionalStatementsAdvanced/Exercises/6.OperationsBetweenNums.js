function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operaor = input[2];
    let total = 0;

    switch (operaor) {
        case '+':
            total = a + b;
            if (total % 2 == 0) {
                console.log(`${a} ${operaor} ${b} = ${total} - even`);
            } else {
                console.log(`${a} ${operaor} ${b} = ${total} - odd`);
            }
            break;
        case '-':
            total = a - b;
            if (total % 2 == 0) {
                console.log(`${a} ${operaor} ${b} = ${total} - even`);
            } else {
                console.log(`${a} ${operaor} ${b} = ${total} - odd`);
            }
            break;
        case '*':
            total = a * b;
            if (total % 2 == 0) {
                console.log(`${a} ${operaor} ${b} = ${total} - even`);
            } else {
                console.log(`${a} ${operaor} ${b} = ${total} - odd`);
            }

            break;
        case '/':
            if (b == 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                total = a / b;
                console.log(`${a} / ${b} = ${total.toFixed(2)}`);
            }
            break;
        case '%':
            if (b == 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                total = a % b;
                console.log(`${a} % ${b} = ${total}`);
            }
            break;
        default:
            break;
    }
}