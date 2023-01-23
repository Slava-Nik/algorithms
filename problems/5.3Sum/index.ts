//Brute force solution O(N^3) + hashmap usage for removing duplicates
export function threeSumBruteForce(nums: number[]): number[][] {
    const result = [];
    if (nums.length < 3) return result;

    const hashmap = new Set();

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

export function threeSumHashmap(nums: number[]): number[][] {
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


// Two pointers O(N^2)

// Sort the array: [-1, 0, 1, 2, -1, -4]. We get  [-4, -3, 0, 4, 7];
// Fix the first elem (-4) and put the first pointer in the beginning (-1) and the second to the end (2)
// Move 2 pointers and the initial element till we find all solutions;
// P.S to avoid duplicates skip repeated values for startIdx and leftP

export function threeSumTwoPointers(nums: number[]): number[][] {
    const result = [];
    if (nums.length < 3) return result;
    const numsArr = nums.slice().sort((a, b) => a - b);

    for (let startIdx = 0; numsArr[startIdx] <= 0; startIdx++) {
        let leftP = startIdx + 1;
        let rightP = numsArr.length - 1;
        if (startIdx > 0 && numsArr[startIdx] === numsArr[startIdx - 1]) {
            continue;
        }
        while (leftP < rightP) {
            const a = numsArr[startIdx];
            const b = numsArr[leftP];
            const c = numsArr[rightP];
            const sum = a + b + c;
            if (sum < 0) {
                leftP++;
            } else if (sum > 0) {
                rightP--;
            } else {
                leftP++;
                rightP--;
                result.push([a, b, c]);
                while (leftP < rightP && numsArr[leftP] === numsArr[leftP - 1]) {
                    leftP++;
                }
            }
        }
    }

    return result;
}

