var twoSum = function (nums, target) {
    const map1 = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map1.has(target - nums[i])) {
            return [map1.get(target - nums[i]), i];
        }
        map1.set(nums[i], i);
    }
    return [];
}

const result = twoSum([2, 4, 5, 11, 6], 9);
console.log(result);