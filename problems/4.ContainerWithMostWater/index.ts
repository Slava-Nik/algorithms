/*  Title: Container With Most Water (Arrays)
    Problem complexity: Medium
    LeetCode: https://leetcode.com/problems/container-with-most-water/
*/


//Brute force solution

export function maxArea(height: number[]): number {

    let maxArea = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let segmentsLength = j - i;
            let minHeight = Math.min(height[i], height[j]);
            let area = minHeight * segmentsLength;
            if (area > maxArea) maxArea = area;
        }
    }
    return maxArea;
};