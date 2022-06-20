function solve(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWallArea = x * y;
    let sideWallWindow = 1.5 * 1.5;
    let bothSideWalls = 2 * sideWallArea - 2 * sideWallWindow;
    let backWall = x * x;
    let door = 2 * 1.2;
    let wallsTotal = 2 * backWall - door;
    let greenPaint = (bothSideWalls + wallsTotal) / 3.4;
    console.log(greenPaint.toFixed(2));


    let twoRectangles = 2 * (x * y);
    let twoTringles = 2 * (x * h / 2);
    let redPaint = (twoRectangles + twoTringles) / 4.3
    console.log(redPaint.toFixed(2));

}
solve([6, 10, 5.2]);