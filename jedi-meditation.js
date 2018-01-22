// link to the problem: http://judge.telerikacademy.com/problem/03jedimeditation

let m = +gets();
let M = [];

let jedis = gets().split(' ');
for (let i = 0; i < m; i += 1) {
    if (jedis[i][0] == 'M') {
        M.push(jedis[i]);
    }
}
for (let i = 0; i < m; i += 1) {
    if (jedis[i][0] == 'K') {
        M.push(jedis[i]);
    }
}
for (let i = 0; i < m; i += 1) {
    if (jedis[i][0] == 'P') {
        M.push(jedis[i]);
    }
}
print(M.join(' '));
