function solve(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothes = Number(input[2]);

    let decor = budget * 0.10;

    let peopleTotal = people * clothes;

    if (people > 150) {
        peopleTotal -= (peopleTotal * 0.10)
    }
    let total = decor + peopleTotal;

    if (total > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }
}
solve(["15437.62",
    "186",
    "57.99"])

