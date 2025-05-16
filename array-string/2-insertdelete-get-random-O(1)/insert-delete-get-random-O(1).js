var RandomizedSet = function () {
    this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.array.includes(val)) {
        return false;
    } else {
        this.array.push(val);
        return true;
    }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    const index = this.array.findIndex((v) => v === val);

    if (index >= 0) {
        this.array.splice(index, 1);
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.array[Math.floor(Math.random()*this.array.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const data = [
    'RandomizedSet',
    'insert',
    'remove',
    'insert',
    'getRandom',
    'remove',
    'insert',
    'getRandom',
];
