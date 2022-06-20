function solve(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * heigth;
    let liters = volume / 1000;
    let total = liters * (1 - percent / 100)

    console.log(total);
}
solve(["85", "75", "47", "17"]); // 248;