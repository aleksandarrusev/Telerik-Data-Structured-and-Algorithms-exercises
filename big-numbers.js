// link to the problem: http://judge.telerikacademy.com/problem/08numberasarray

let counts = gets();
let arr1 = gets();
let arr2 = gets();

counts = counts.split(' ').map(Number);

arr1 = arr1.split(' ').map(Number);
arr2 = arr2.split(' ').map(Number);

let endResult = [];
let max = counts.reduce((a, b) => {
    return Math.max(a, b);
});

const calculate = (num1 = 0, num2 = 0) => {
    const sum = remainder ? num1 + num2 + 1 : num1 + num2;

    if (sum > 9) {
        remainder = true;
        return sum % 10;
    }
    remainder = false;
    return sum;
};

let remainder = false;
for (let i = 0; i < max; i += 1) {
    endResult.push(calculate(arr1[i], arr2[i]));
}

print(endResult.join(' '));