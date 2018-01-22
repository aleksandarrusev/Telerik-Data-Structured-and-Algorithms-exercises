// link to the problem: http://judge.telerikacademy.com/problem/03trapezoid

const n = +gets();
const dot = '.';
const star = '*';

for (let i = 0; i < n + 1; i += 1) {
    let result = '';
    if (i === 0) {
        result += dot.repeat(n) + star.repeat(n);
        print(result);
    } else if (i === n) {
        result += star.repeat(n * 2);
        print(result);
    } else {
        result += dot.repeat(n - i) + star + dot.repeat((n + i) - 2) + star;
        print(result);
    }
}
