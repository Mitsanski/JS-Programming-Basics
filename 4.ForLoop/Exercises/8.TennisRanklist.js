function solve(input) {
    let tournaments = Number(input.shift());
    let startingPoints = Number(input.shift());
    let total = startingPoints;
    let wins = 0;

    for (let i = 0; i < tournaments; i++) {
        let currElement = input.shift();
        
        switch (currElement) {
            case 'W':
                total += 2000;
                wins++;
                break;
            case 'F':
                total += 1200;
                break;
            case 'SF':
                total += 720;
            default:
                break;
        }
    }
    let winsPercent = (wins / tournaments) * 100;

    console.log(`Final points: ${total}`);
    console.log(`Average points: ${(total - startingPoints) / tournaments}`);
    console.log(`${winsPercent.toFixed(2)}%`);

}
solve(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
