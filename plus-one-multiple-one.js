// link to the problem: http://judge.telerikacademy.com/problem/02plusonemultiplyone
// solution without using a queue

const arr = gets().split(' ').map(Number);
const n = arr[0];
const m = arr[1];


const calculate = (num, count) => {
    const result = new Map();
    result.set(1, num);
    let eq;
    let counter = 0;
    for (let i = 2; i <= count; i += 1) {
        if (i % 3 === 2) {
            counter += 1;
            num = result.get(counter);
            eq = num + 1;
        } else if (i % 3 === 0) {
            eq = (2 * num) + 1;
        } else if (i % 3 === 1) {
            eq = num + 2;
        }
        result.set(i, eq);
    }

    return result.get(count);
};

print(calculate(n, m));
