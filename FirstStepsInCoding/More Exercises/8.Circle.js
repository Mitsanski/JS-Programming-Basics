function solve(input) {
    let r = Number(input[0])
    let area = Math.PI * r * r;
    console.log(area.toFixed(2));
    let perimeter = 2 * Math.PI * r;
    console.log(perimeter.toFixed(2));
}
solve([35.875])