function maxNum(input) {
    let inputElement = input[0];
    let index = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (inputElement !== 'Stop') {
        let num = Number(inputElement);
        if (num > max) {
            max = num;
        }
        inputElement = input[index];
        index++;
    }
    console.log(max);
}
maxNum(["100",
    "99",
    "80",
    "70",
    '100',
    "Stop"])