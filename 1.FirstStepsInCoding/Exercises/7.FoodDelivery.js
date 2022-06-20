function solve(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let chickenTotal = chicken * 10.35;
    let fishTotal = fish * 12.40;
    let veganTotal = vegan * 8.15;

    let total = chickenTotal + fishTotal + veganTotal;
    let totalDessert = total + (total * 0.20);

    console.log(totalDessert + 2.50);
}
solve(["2", "4", "3"]) // 116.2