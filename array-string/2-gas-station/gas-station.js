/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let total_tank = 0;
    let curr_tank = 0;
    let start_index = 0;
    
    for (let i = 0; i < gas.length; i++) {
        total_tank += gas[i] - cost[i];
        curr_tank += gas[i] - cost[i];
        if (curr_tank < 0) {
            start_index = i + 1;
            curr_tank = 0;
        }
    }
    return total_tank >= 0 ? start_index : -1;
};

// const data = [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]];
const data = [
    [2, 3, 4],
    [3, 4, 3],
];
// const data = [[5,1,2,3,4], [4,4,1,5,1]];

console.log(canCompleteCircuit(...data));
