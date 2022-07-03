function solve(input) {
    let total = 0;
    let command = input.shift();

    while (command !== 'NoMoreMoney'){
        if (command >= 0){
            total += Number(command);
            console.log(`Increase: ${Number(command).toFixed(2)}`);
        } else {
            console.log('Invalid operation!');
            break;
        }
        command = input.shift();
    }
    console.log(`Total: ${total.toFixed(2)}`);
}