function solve(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningSupply = Number(input[2]);
    let discount = Number(input[3]);

    let pensTotal = pens * 5.80;
    let markersTotal = markers * 7.20;
    let cleaningTotal = cleaningSupply * 1.20;

    let total = pensTotal + markersTotal + cleaningTotal;
    total = total - (total * discount / 100) ;

    console.log(total);
}
solve(["2", "3", "4", "25"])