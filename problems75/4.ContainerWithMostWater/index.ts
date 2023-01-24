/*  Title: Container With Most Water (Arrays)
    Problem complexity: Medium
    LeetCode: https://leetcode.com/problems/container-with-most-water/
*/


//Two pointers solution O(N)

// 1. Put the leftP in the beginning and rightP in the end.
// 2. While leftPointer < rightPointer:
//  If the left height is higher than the right one, move right pointer to the left. And vice versa

export function maxAreaTwoPointers(height: number[]): number {
    if (height.length < 2) return 0;

    let maxArea = 0;
    let leftP = 0;
    let rightP = height.length - 1;

    const measureArea = (leftP, rightP) => {
        const segmentsLength = rightP - leftP;
        const minHeight = Math.min(height[leftP], height[rightP]);
        return segmentsLength * minHeight;
    };

    while (leftP < rightP) {
        const area = measureArea(leftP, rightP);
        if (area > maxArea) maxArea = area;
        if (height[leftP] <= height[rightP]) {
            leftP++;
        } else {
            rightP--;
        }
    }

    return maxArea;
}


//Brute force solution O(N^2)
export function maxAreaBruteForce(height: number[]): number {
    if (height.length < 2) return 0;

    let maxArea = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const segmentsLength = j - i;
            const minHeight = Math.min(height[i], height[j]);
            const area = minHeight * segmentsLength;
            if (area > maxArea) maxArea = area;
        }
    }
    return maxArea;
}


