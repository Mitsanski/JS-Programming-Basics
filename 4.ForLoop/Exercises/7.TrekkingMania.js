function solve(input) {
    let groups = Number(input.shift())
    let totalPeople = 0;

    let musala = 0;
    let montBlanc = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < groups; i++) {
        let currentGroup = Number(input.shift());
        totalPeople += currentGroup;
        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup >= 6 && currentGroup <= 12) {
            montBlanc += currentGroup;
        } else if (currentGroup >= 13 && currentGroup <= 25) {
            kili += currentGroup;
        } else if (currentGroup >= 26 && currentGroup <= 40) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }

    let musalaPercent = musala / totalPeople * 100;
    let montBlancPercent = montBlanc / totalPeople * 100;
    let kiliPercent = kili / totalPeople * 100;
    let k2Percent = k2 / totalPeople * 100;
    let everestPercent = everest / totalPeople * 100;

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montBlancPercent.toFixed(2)}%`);
    console.log(`${kiliPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}
solve(["5",
"25",
"41",
"31",
"250",
"6"])

