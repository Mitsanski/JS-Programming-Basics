function maxNum(input) {
    let inputElement = input[0];
    let index = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while (inputElement !== 'Stop') {
        let num = Number(inputElement);
        if (num < min) {
            min = num;
        }
        inputElement = input[index];
        index++;
    }
    console.log(min);
}
maxNum(["100",
    "99",
    "80",
    "70",
    '100',
    "Stop"])