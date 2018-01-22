// link to the problem: http://judge.telerikacademy.com/problem/02forestroad

const n = +gets();
const dot = '.';
const star = '*';
// let forward = true;
let counter = 1;


for (let i = 0; i < (n * 2) - 1; i += 1) {
    let result = '';

    for (let z = 0; z < n; z += 1) {
        if (i < n) {
            if (z === i) {
                result += star;
            } else {
                result += dot;
            }
        } else {
            if (z === n - counter - 1) {
                result += star;
            } else {
                result += dot;
            }
        }
    }
    if (i >= n) {
        counter += 1;
    }
    print(result);
}
