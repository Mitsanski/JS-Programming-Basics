function solve(input) {
    let product = input[0];
    let day = input[1];
    let qty = Number(input[2]);

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (product == 'banana') {
                console.log((2.50 * qty).toFixed(2));
            } else if (product == 'apple') {
                console.log((1.20 * qty).toFixed(2));
            } else if (product == 'orange') {
                console.log((0.85 * qty).toFixed(2));
            } else if (product == 'grapefruit') {
                console.log((1.45 * qty).toFixed(2));
            } else if (product == 'kiwi') {
                console.log((2.70 * qty).toFixed(2));
            } else if (product == 'pineapple') {
                console.log((5.50 * qty).toFixed(2));
            } else if (product == 'grapes') {
                console.log((3.85 * qty).toFixed(2));
            } else {
                console.log('error');
            }
            break;
        case 'Saturday':
        case 'Sunday':
            if (product == 'banana') {
                console.log((2.70 * qty).toFixed(2));
            } else if (product == 'apple') {
                console.log((1.25 * qty).toFixed(2));
            } else if (product == 'orange') {
                console.log((0.90 * qty).toFixed(2));
            } else if (product == 'grapefruit') {
                console.log((1.60 * qty).toFixed(2));
            } else if (product == 'kiwi') {
                console.log((3.00  * qty).toFixed(2));
            } else if (product == 'pineapple') {
                console.log((5.60 * qty).toFixed(2));
            } else if (product == 'grapes') {
                console.log((4.20 * qty).toFixed(2));
            } else {
                console.log('error');
            }
            break;
        default: console.log('error'); break;
    }
}