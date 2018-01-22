// link to the problem: http://judge.telerikacademy.com/problem/02plusonemultiplyone

const x = +gets();
const y = +gets();

if (x > 0 && y > 0) {
    print(1);
} else if (x < 0 && y > 0) {
    print(2);
} else if (x < 0 && y < 0) {
    print(3);
} else if (x > 0 && y < 0) {
    print(4);
} else if (x !== 0 && y === 0) {
    print(6);
} else if (x === 0 && y !== 0) {
    print(5);
} else if (x === 0 && y === 0) {
    print(0);
}
