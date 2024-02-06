import { Problem } from "../types/problemTypes";

import assert from "assert";

export const productExceptSelfHandler = (fn: any) => {
  try {
    const tests: number[][] = [
      [1, 2, 3, 4],
      [-1, 1, 0, -3, 3],
    ];

    const answers: number[][] = [
      [24, 12, 8, 6],
      [0, 0, 9, 0, 0],
    ];

    if (tests.length !== answers.length) {
      throw new Error("Number of test cases and answers don't match.");
    }

    for (let i = 0; i < tests.length; i++) {
      const input = tests[i];
      const expected = answers[i];
      const result = fn(input);
      assert.strictEqual(JSON.stringify(result), JSON.stringify(expected));
    }

    return true;
  } catch (error: any) {
    console.log("Error from productExceptSelfHandler: ", error);
    throw new Error(error);
  }
};


const starterCodeProductExceptSelfJS = `function productExceptSelf(nums) {
  // Write your code here
};`;

const problemSolution = `function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }
    
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
    
    return output;
};`;

export const productExceptSelf: Problem = {
  id: "product-of-array-except-self",
  title: "Product of Array Except Self",
  problemStatement: `<p class='mt-3'>
    Given an integer array <code>nums</code>, return an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code>.
  </p>`,

  examples: [
    {
      id: 0,
      inputText: `nums = [1, 2, 3, 4]`,
      outputText: `[24, 12, 8, 6]`,
      explanation: "",
    },
    {
      id: 1,
      inputText: `nums = [-1, 1, 0, -3, 3]`,
      outputText: `[0, 0, 9, 0, 0]`,
      explanation: "",
    },
  ],
  constraints: `<li class='mt-2'><code>2 <= nums.length <= 10^5</code></li>
    <li class='mt-2'><code>-30 <= nums[i] <= 30</code></li>
    <li class='mt-2'>The product of any prefix or suffix of <code>nums</code> is guaranteed to fit in a 32-bit integer.</li>`,
  starterCode: starterCodeProductExceptSelfJS,
  handlerFunction: productExceptSelfHandler,
  starterFunctionName: "function productExceptSelf(",
  order: 12,
  solution: problemSolution,
};
