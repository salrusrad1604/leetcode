/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const set = new Set();
  const buff = [0];

  while (buff.length && set.size < rooms.length) {
    const val = buff.pop();
    if (!set.has(val)) {
      set.add(val);
      buff.push(...rooms[val]);
    }
  }

  return set.size === rooms.length;
};

// const data = [[1], [2], [3], []];
const data = [[1, 3], [3, 0, 1], [2], [0]];

console.log(canVisitAllRooms(data));
