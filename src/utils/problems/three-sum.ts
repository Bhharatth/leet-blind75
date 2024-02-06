import assert from "assert";
import { Problem } from "../types/problemTypes";

export const threeSumHandler = (fn: any) => {
	try {
		const tests = [
			[-1, 0, 1, 2, -1, -4],
			[0, 1, 1],
			[0, 0, 0],
		];
		const answers = [
			[[-1, -1, 2], [-1, 0, 1]],
			[],
			[[0, 0, 0]],
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from threeSumHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeThreeSumJS = `function threeSum(nums) {
  // Write your code here
};`;
const problemSolution =`function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
}`

export const threeSum: Problem = {
	id: "three-sum",
	title: "3Sum",
	problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code>, return all the triplets <code>[nums[i], nums[j], nums[k]]</code>
    such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.
  </p>
  <p class='mt-3'>
    Notice that the solution set must not contain duplicate triplets.
  </p>
  `,

	examples: [
		{
			id: 0,
			inputText: `nums = [-1,0,1,2,-1,-4]`,
			outputText: `[[ -1, -1, 2 ], [ -1, 0, 1 ]]`,
			explanation: "The distinct triplets are [-1,0,1] and [-1,-1,2].",
		},
		{
			id: 1,
			inputText: `nums = [0,1,1]`,
			outputText: `[]`,
			explanation: "The only possible triplet does not sum up to 0.",
		},
		{
			id: 2,
			inputText: `nums = [0,0,0]`,
			outputText: `[[0,0,0]]`,
			explanation: "The only possible triplet sums up to 0.",
		},
	],
	constraints: `<li class='mt-2'><code>3 <= nums.length <= 3000</code></li>
    <li class='mt-2'><code>-10^5 <= nums[i] <= 10^5</code></li>`,
	starterCode: starterCodeThreeSumJS,
	handlerFunction: threeSumHandler,
	starterFunctionName: "function threeSum(",
	order: 9,
    solution:problemSolution
};
