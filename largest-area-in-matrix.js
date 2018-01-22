// link to the problem: http://judge.telerikacademy.com/problem/29largestareamatrix

const input = gets();
const [n, m] = input.split(' ');

let matrix = [];
for (let i = 0; i < n; i++) {
    const y = gets();
    matrix.push(y.split(' ').map(Number));
}

let max = 0;

const findChildren = (row, col) => {
    const children = [];
    const current = matrix[row][col]
    if (row > 0 && current === matrix[row - 1][col]) {
        children.push({
            row: row - 1,
            col: col,
        });
    }
    if (row < (matrix.length - 1) && current === matrix[row + 1][col]) {
        children.push({
            row: row + 1,
            col: col,
        });
    }
    if (col > 0 && current === matrix[row][col - 1]) {
        children.push({
            row: row,
            col: col - 1,
        });
    }
    if (col < (matrix[row].length - 1) && current === matrix[row][col + 1]) {
        children.push({
            row: row,
            col: col + 1,
        });
    }

    return children;
};


matrix.forEach((line, row) => {
    line.forEach((val, col) => {
        let currentMax = 0;
        const dfs = (node) => {
            const children = findChildren(node.row, node.col);
            matrix[node.row][node.col] = 'x';
            currentMax += 1;
            children.forEach((child) => {
                if (matrix[child.row][child.col] !== 'x') {
                    dfs(child);
                }
            });
        }

        if (val !== 'x') {
            let node = { row, col };
            dfs(node, 0);
            if (currentMax > max) {
                max = currentMax;
            }
        }
    });
});
print(max);
