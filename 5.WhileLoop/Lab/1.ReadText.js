function solve(input) {
    let str = input.shift();

    while (str !== 'Stop') {
        console.log(str);
        str = input.shift();
    }
}
solve(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
