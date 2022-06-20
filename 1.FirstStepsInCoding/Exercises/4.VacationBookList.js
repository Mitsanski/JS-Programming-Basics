function solve(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeForBook = totalPages / pagesPerHour;
    let hoursPerDay = timeForBook / days
    console.log(hoursPerDay);
}
solve(["212 ",

    "20 ",

    "2 "])