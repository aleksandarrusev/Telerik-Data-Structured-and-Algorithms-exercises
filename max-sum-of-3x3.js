// link to the problem: http://judge.telerikacademy.com/problem/27maxsuminmatrix

let dimensions = gets().split(' ').map(Number);
let arr = [];

for (let i = 0; i < dimensions[0]; i += 1) {
    const currentRow = gets().split(' ').map(Number);
    arr.push(currentRow);
}

let max = -Infinity;
let count = 0;

for (let row = 0; row < arr.length - 2; row += 1) {
    for (let col = 0; col < arr[row].length - 2; col += 1) {
        count = arr[row][col] + arr[row][col + 1] + arr[row][col + 2] +
            arr[row + 1][col] + arr[row + 1][col + 1] + arr[row + 1][col + 2] +
            arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];

        if (count > max) {
            max = count;
        }
    }
}

print(max);
