function solve(input) {
    let tax = Number(input[0]);
    let shoes = tax - (tax * 0.40);
    let clothes = shoes - (shoes * 0.20);
    let ball = clothes * 0.25;
    let accesories = ball * 0.20;

    let total = tax + shoes + clothes + ball + accesories;

    console.log(total);
}
solve(['365']);
// 811.76