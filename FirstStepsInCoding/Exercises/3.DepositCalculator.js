function solve(input) {
    let depositSum = Number(input[0]);
    let months = Number(input[1]);
    let yearlyInterest = Number(input[2]);
    

    let result = depositSum + months * ((depositSum * yearlyInterest / 100) / 12)
    console.log(result);
}
solve(["200","3","5.7"])