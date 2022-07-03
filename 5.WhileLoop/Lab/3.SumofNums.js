function solve(input) {
    let num = Number(input.shift());
    let total = 0;
    let index = 0;

    while (num > total){
        total += Number(input[index]);
        index++
    }
    console.log(total);
}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
