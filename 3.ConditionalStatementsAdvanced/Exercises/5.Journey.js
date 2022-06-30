function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let total = 0;
    let destination = '';
    let accommodation = '';

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            accommodation = 'Camp';
            total = budget * 0.30;
        } else if (season == 'winter') {
            accommodation = 'Hotel';
            total = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            accommodation = 'Camp';
            total = budget * 0.40;
        } else if (season == 'winter') {
            accommodation = 'Hotel';
            total = budget * 0.80;
        }
    } else {
        destination = 'Europe';
        accommodation = 'Hotel'
        total = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${total.toFixed(2)}`);
}
solve(["50", "summer"])
solve(["75", "winter"])
solve(["312", "summer"])
solve(["678.53", "winter"])
solve(["1500", "summer"])