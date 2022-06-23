function solve(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let perMeter = Number(input[2]);
    let totalTime = (distance * perMeter) + Math.floor((distance / 15) * 12.5);

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(totalTime - record)
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
solve(["55555.67",
    "3017",
    "5.03"])

