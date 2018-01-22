// link to the problem: http://judge.telerikacademy.com/problem/31bitshiftmatrix

const mult = (strNum1, strNum2) => {

    let a1 = strNum1.split("").reverse();
    let a2 = strNum2.split("").reverse();
    let aResult = [];

    for (let iterNum1 = 0; iterNum1 < a1.length; iterNum1++) {
        for (let iterNum2 = 0; iterNum2 < a2.length; iterNum2++) {
            let idxIter = iterNum1 + iterNum2;    // Get the current array position.
            aResult[idxIter] = a1[iterNum1] * a2[iterNum2] + (idxIter >= aResult.length ? 0 : aResult[idxIter]);

            if (aResult[idxIter] > 9) {    // Carrying
                aResult[idxIter + 1] = Math.floor(aResult[idxIter] / 10) + (idxIter + 1 >= aResult.length ? 0 : aResult[idxIter + 1]);
                aResult[idxIter] -= Math.floor(aResult[idxIter] / 10) * 10;
            }
        }
    }
    return aResult.reverse().join("");
}

const pow = (x, y) => {
    let result = '1';
    x = x.toString();
    let i = 1;
    while (i <= y) {
        result = mult(x, result);
        i += 1
    }
    return result;
}

const add = (a, b) => {
    function addition(a, b, acc = '', carry = 0) {
        if (!(a.length || b.length || carry)) return acc.replace(/^0+/, '');

        carry = carry + (~~a.pop() + ~~b.pop());
        acc = carry % 10 + acc;
        carry = carry > 9;

        return addition(a, b, acc, carry);
    }
    if (a === '0' && b === '0') return '0';
    return addition(a.split(''), b.split(''));
}

let r = +gets();
let c = +gets();
let movesCount = +gets();
let rawMoves = gets().split(' ').map(Number);

let coef = Math.max(r, c);
let matrix = []
let num = pow(2, r - 1);


for (let i = 1; i <= r; i += 1) {
    let row = [num];
    for (let z = 1; z < c; z += 1) {
        row.push(mult(row[z - 1].toString(), '2'));
    }
    matrix.push(row);
    num = pow(2, r - 1 - i);
}
// console.log(matrix);


const parseNums = (number) => {
    const row = (number / coef) | 0;
    const col = (number % coef);
    return { row, col };
};
let pointer = {
    row: r - 1,
    col: 0,
};
let count = "0";

let moveX = (col) => {
    if (pointer.col < col) {
        while (pointer.col <= col) {
            count = add(count, matrix[pointer.row][pointer.col].toString());
            matrix[pointer.row][pointer.col] = 0;
            pointer.col += 1;
        }
        pointer.col -= 1;
    } else if (pointer.col > col) {
        while (pointer.col >= col) {
            count = add(count, matrix[pointer.row][pointer.col].toString());
            matrix[pointer.row][pointer.col] = 0;
            pointer.col -= 1;
        }
        pointer.col += 1;
    }
};

let moveY = (row) => {
    if (pointer.row < row) {
        while (pointer.row <= row) {
            count = add(count, matrix[pointer.row][pointer.col].toString());
            matrix[pointer.row][pointer.col] = 0;
            pointer.row += 1;
        }
        pointer.row -= 1;
    } else if (pointer.row > row) {
        while (pointer.row >= row) {
            count = add(count, matrix[pointer.row][pointer.col].toString());
            matrix[pointer.row][pointer.col] = 0;
            pointer.row -= 1;
        }
        pointer.row += 1;
    }
};

for (const rawMove of rawMoves) {
    const move = parseNums(rawMove);
    moveX(move.col);
    moveY(move.row);
}
// moveX(2);
// moveY(2);
// print(matrix);
print(count);
