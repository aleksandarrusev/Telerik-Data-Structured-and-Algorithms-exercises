// link to the problem: http://judge.telerikacademy.com/problem/12leastmajoritymulti

const num1 = +gets();
const num2 = +gets();
const num3 = +gets();
const num4 = +gets();
const num5 = +gets();

const arr = [num1, num2, num3, num4, num5];
arr.sort();

let start = arr[2];

const findIt = () => {
    let found = false;

    while (!found) {
        let count = 0;
        if (start % num1 === 0) {
            count += 1;
        }
        if (start % num2 === 0) {
            count += 1;
        }
        if (start % num3 === 0) {
            count += 1;
        }
        if (start % num4 === 0) {
            count += 1;
        }
        if (start % num5 === 0) {
            count += 1;
        }

        if (count > 2) {
            found = true;
            return start;
        }

        start += 1;
    }
};

print(findIt());
