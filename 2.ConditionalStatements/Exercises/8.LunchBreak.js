function solve(input) {
    let name = input[0];
    let seriesLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength * 0.125;
    let restTime = breakLength * 0.25;

    let remainingTime = breakLength - lunchTime - restTime;

    if (remainingTime >= seriesLength) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(remainingTime - seriesLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(seriesLength - remainingTime)} more minutes.`);
    }
}
solve(["Teen Wolf",
    "48",
    "60"])

