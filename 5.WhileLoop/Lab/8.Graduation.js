function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let count = 1;
    let totalGrade = 0;
    let excluded = 0;

    while (count <= 12){
        let grade = Number(input[index]);
        index++;
        if (grade >= 4.00){
            count++;
            totalGrade += grade;
        } else if (grade < 4.00){
            excluded++
        }
        if (excluded == 2){
            console.log(`${name} has been excluded at ${count} grade`);
            return;
        }
    }
    let avg = total / 12;
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
}