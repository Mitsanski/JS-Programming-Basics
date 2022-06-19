function solve(input) {
    let toBeGreened = Number(input);

    let total = (toBeGreened * 7.61);
    let discount = total * 0.18;
    console.log(`The final price is: ${total - discount} lv.`)
    console.log(`The discount is: ${discount} lv.`);
}
solve('550')
