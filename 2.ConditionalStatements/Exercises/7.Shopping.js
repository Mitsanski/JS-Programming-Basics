function solve(input) {
    let budget = Number(input[0]);
    let gpus = Number(input[1]);
    let cpus = Number(input[2]);
    let rams = Number(input[3]);

    let gpuTotal = 250 * gpus;
    let cpuTotal = (gpuTotal * 0.35) * cpus;
    let ramTotal = (gpuTotal * 0.10) * rams;

    let total = gpuTotal + cpuTotal + ramTotal;

    if (gpuTotal > cpuTotal) {
        total -= (total * 0.15);
    }

    if (budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}
solve(["920.45",
    "3",
    "1",
    "1"])
