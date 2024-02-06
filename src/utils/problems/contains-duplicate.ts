import { Problem } from "../types/problemTypes";

import assert from "assert";

export const containsDuplicateHandler = (fn: any) => {
  try {
    const tests: number[][] = [
      [1, 2, 3, 1],
      [1, 2, 3, 4],
      [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
    ];

    const answers = [true, false, true];
   
    for (let i = 0; i < tests.length; i++) {
      const currentTest = tests[i];
      if (currentTest && currentTest.length > 0) {
        const result = fn(currentTest);
        assert.strictEqual(result, answers[i]);
      }
    }

    return true;
  } catch (error: any) {
    console.log("Error from containsDuplicateHandler: ", error);
    throw new Error(error);
  }
};


const starterCodeContainsDuplicateJS = `function containsDuplicate(nums) {
  // Write your code here
};`;

const problemSolution = `function containsDuplicate(nums) {
    const set = new Set(nums);
    return set.size !== nums.length;
};`;

export const containsDuplicate: Problem = {
  id: "contains-duplicate",
  title: "217. Contains Duplicate",
  problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code>, return <code>true</code> if any value appears at least twice in the array, and return <code>false</code> if every element is distinct.
  </p>`,

  examples: [
    {
      id: 0,
      inputText: `nums = [1, 2, 3, 1]`,
      outputText: `true`,
      explanation: "",
    },
    {
      id: 1,
      inputText: `nums = [1, 2, 3, 4]`,
      outputText: `false`,
      explanation: "",
    },
    {
      id: 2,
      inputText: `nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]`,
      outputText: `true`,
      explanation: "",
    },
  ],
  constraints: `<li class='mt-2'><code>1 <= nums.length <= 10^5</code></li>
    <li class='mt-2'><code>-10^9 <= nums[i] <= 10^9</code></li>`,
  starterCode: starterCodeContainsDuplicateJS,
  handlerFunction: containsDuplicateHandler,
  starterFunctionName: "function containsDuplicate(",
  order: 11,
  solution: problemSolution
};
