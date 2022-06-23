function solve(input) {
    let holidayPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let totalToys = puzzels + dolls + bears + minions + trucks;

    let puzzelsTotal = puzzels * 2.60;
    let dollsTotal = dolls * 3;
    let bearsTotal = bears * 4.10;
    let minionsTotal = minions * 8.20;
    let trucksTotal = trucks * 2;

    let total = puzzelsTotal + dollsTotal + bearsTotal + minionsTotal + trucksTotal;

    if (totalToys >= 50) {
        total -= (total * 0.25)
    }
    let totalAfterRent = total - (total * 0.10);

    if (totalAfterRent >= holidayPrice) {
        console.log(`Yes! ${(totalAfterRent - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - totalAfterRent).toFixed(2)} lv needed.`);
    }
}
solve((["320",
"8",
"2",
"5",
"5",
"1"]));