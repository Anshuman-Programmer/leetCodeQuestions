function twoSum(nums, target) {
    const previousValues = {}
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i]
        const neededValue = target - currentValue
        if (previousValues[neededValue] != null) {
            return [previousValues[neededValue], i]
        } else {
            previousValues[currentValue] = i
        }
    }
    return []
}

const nums = [2,7,11,15]
const target = 9

console.log(twoSum(nums, target))