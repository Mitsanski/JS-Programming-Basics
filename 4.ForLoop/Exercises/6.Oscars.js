function solve(input) {
    let actorName = input.shift();
    let pointsFromAcademy = Number(input.shift());
    let judges = Number(input.shift());

    for (let i = 0; i < judges; i++) {
        let judgeName = (input.shift()).length;
        let points = Number(input.shift())
        pointsFromAcademy += ((judgeName * points) / 2);
        if (pointsFromAcademy >= 1250.5) {
            break;
        }
    }

    if(pointsFromAcademy >= 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - pointsFromAcademy).toFixed(1)}`);
    }
}
solve(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
