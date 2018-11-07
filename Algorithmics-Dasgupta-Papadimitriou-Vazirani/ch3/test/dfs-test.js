const tape = require("tape");
const dfs = require("../build/dfs");
const construct_adjacency_list = require("../build/construct_adjacency_list");
tape("explore", ((test) => {
    let al = construct_adjacency_list(['ABCD', 'BAFE', 'CAF', 'DAGH', 'EBIJ', 'FBIJ', 'FBC', 'GDH', 'HDG', 'IEJ', 'JEI', 'KL', 'LK']);
    test.deepEqual(dfs(al).map(d => {
        return d.sort()
    }), ['ABCDEFGHIJ'.split(''), 'KL'.split('')].map(d => {
        return d.sort()
    }));
    test.end();
}));