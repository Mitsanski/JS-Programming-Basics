function solve(input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]);
    paint += paint * 0.10;
    let separator = Number(input[2]);
    let hours = Number(input[3]);

    let nylonTotal = nylon * 1.50;
    let paintTotal = paint * 14.50;
    let separatorTotal = separator * 5;

    let totalPrice = nylonTotal + paintTotal + separatorTotal + 0.40;
    let workersPay = (totalPrice * 0.30) * hours;

    console.log(workersPay + totalPrice);
}
solve(["10", "11", "4", "8"]) // 727.09