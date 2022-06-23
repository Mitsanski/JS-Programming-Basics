function solve(input) {
    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    let total = 0;

    if (type == 'square') {
        total = a * a;
    } else if (type == 'rectangle') {
        total = a * b;
    } else if (type == 'circle') {
        total = Math.PI * a * a;
    } else if (type == 'triangle') {
        total = a * b / 2;
    }
    console.log(total.toFixed(3));
}
solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve((["triangle", "4.5", "20"]));
