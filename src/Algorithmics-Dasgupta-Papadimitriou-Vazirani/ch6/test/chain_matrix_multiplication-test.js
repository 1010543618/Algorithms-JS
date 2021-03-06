const tape = require("tape");
const chain_matrix_multiplication = require("../chain_matrix_multiplication");
tape(__filename, ((test) => {
    test.deepEqual(chain_matrix_multiplication([
        [50, 20],
        [20, 1],
        [1, 10],
        [10, 100]
    ]).cost, 7000);
    test.end();
}));