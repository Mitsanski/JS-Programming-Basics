function solve(input) {
    let temp = Number(input[0]);
    let time = input[1];
    let outfit = '';
    let shoes = '';

    if (temp >= 10 && temp <= 18) {
        if (time == 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (time == 'Afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (time == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (temp > 18 && temp <= 24) {
        if (time == 'Morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (time == 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (time == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (temp >= 25) {
        if (time == 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (time == 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (time == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}
solve((["16",
    "Morning"])
);
solve((["22",
    "Afternoon"])
);
solve(['28', 'Evening'])