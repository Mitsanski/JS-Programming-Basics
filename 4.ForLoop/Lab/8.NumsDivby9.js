function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let total = 0;
    let output = ''
    
    for (let i = a; i <= b; i++){
        if (i % 9 == 0){
            total += i;
            output += i + ' ' + '\n' ;
        }
    }
    console.log(`The sum: ${total}`);
    console.log(output);
}
solve(['100', '200']);