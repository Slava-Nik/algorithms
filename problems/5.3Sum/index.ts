//Brute force solution O(N^3) + hashmap usage for removing duplicates
export function threeSumBruteForce(nums: number[]): number[][] {
    const result = [];
    const hashmap = new Set();
    if (nums.length < 3) return result;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const sortedCase = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    const sortedCaseHash = sortedCase.toString();
                    if (!hashmap.has(sortedCaseHash)) {
                        hashmap.add(sortedCaseHash);
                        result.push(sortedCase);
                    }
                }
            }
        }
    }

    return result;
}


//Brute force solution O(N^2)
// + hashmap to store third value
// + hashmap to avoid duplicates

export function threeSumN2(nums: number[]): number[][] {
    const result = [];
    const hashmap = {};
    const hashmapDuplicates = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!hashmap[nums[i]]) {
            hashmap[nums[i]] = i;
        }
    }

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const a = nums[i];
            const b = nums[j];
            const c = 0 - (a + b);
            const cIdx = hashmap[c];
            if ((cIdx !== undefined) && (i !== cIdx && j !== cIdx)) {
                const sortedCase = [a, b, c].sort((x, y) => x - y);
                const sortedCaseHash = sortedCase.toString();
                if (!hashmapDuplicates.has(sortedCaseHash)) {
                    hashmapDuplicates.add(sortedCaseHash);
                    result.push([a, b, c]);
                }
            }
        }
    }


    return result;
}
