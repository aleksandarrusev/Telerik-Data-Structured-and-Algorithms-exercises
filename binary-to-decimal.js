// link to the problem: http://judge.telerikacademy.com/problem/11bintodec

const n = gets();
const arr = n.split('').map(Number);
let result = 0;

for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 0) {
        continue;
    }
    result += Math.pow(2, arr.length - i - 1);
}

print(result);
