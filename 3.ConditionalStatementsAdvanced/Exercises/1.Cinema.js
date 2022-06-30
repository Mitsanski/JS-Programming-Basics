function solve(input) {
    let movie = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    let income = 0;

    switch (movie) {
        case 'Premiere': income = (rows * cols) * 12; break;
        case 'Normal': income = (rows * cols) * 7.50; break;
        case 'Discount': income = (rows * cols) * 5; break;

        default:
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
solve((["Premiere", "10", "12"]));
solve((["Normal", "21", "13"]));
solve((["Discount", "12", "30"]));