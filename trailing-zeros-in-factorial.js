// link to the problem: http://judge.telerikacademy.com/problem/16trailingzeroinfact

let n = +gets();
let i = 1;
let result = 0;

while (true) {
    n = n / 5;
    result += n | 0;

    if (n <= 1) {
        break;
    }
}

print(result | 0);