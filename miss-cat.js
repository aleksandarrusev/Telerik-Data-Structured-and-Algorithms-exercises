// link to the problem: http://judge.telerikacademy.com/problem/32misscat

const n = +gets();
let result = [];
let max = 1;

for (let i = 0; i < n; i += 1) {
    let c = +gets();

    if (result[c]) {
        result[c] += 1;
    } else {
        result[c] = 1;
    }

    if (result[c] > max) {
        max = result[c];
    }
}


let finalResult = result.indexOf(max);

print(finalResult);
quit(0);