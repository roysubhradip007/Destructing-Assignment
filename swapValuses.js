function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}
let x = 5, y = 10;
const swapped = swapValues(x, y);
console.log(swapped);