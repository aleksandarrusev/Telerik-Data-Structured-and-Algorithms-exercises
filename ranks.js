// link to the problem: http://judge.telerikacademy.com/problem/l3p3rankove

let n = +gets();
let arr = gets().split(' ').map(Number);

const sortedArray = arr.slice().sort((a, b) => b - a);

for (let i = 0; i < arr.length; i++) {
    arr[i] = sortedArray.indexOf(arr[i]) + 1;
}

print(arr.join(' '));
