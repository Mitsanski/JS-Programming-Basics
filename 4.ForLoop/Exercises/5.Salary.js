function solve(input) {
    let tabs = Number(input.shift());
    let salary = Number(input.shift());
    for (let i = 0; i < tabs; i++) {
        let currentTab = input.shift();
        switch (currentTab) {
            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break;
            default:
                break;
        }

        if (salary <= 0) {
            break;
        }

        if (input.length == 0) {
            break;
        }
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }
}