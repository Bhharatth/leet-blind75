import assert from "assert";
import { Problem } from "../types/problemTypes";

export const simpleMathProblemHandler = (fn: any) => {
	try {
        const tests = [
            [5, 3],   // Test case 1
            [8, 4],   // Test case 2
            [18, 2],  // Test case 3
          ];
          const answers = [8, 12, 20]; 
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.equal(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from jumpGameHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeSimpleMathProblemJS = `function canJump(nums) {
  // Write your code here
};`;

export const simpleMathProblem: Problem = {
	id: "simple-math-problem",
	title: "1. Simple Math Problem",
	problemStatement: `<p class='mt-3'>
    You are given two numbers<code>a</code> and <code>b</code>. Calculate their sum.
  </p>
   
  `,

	examples: [
        {
            id: 0,
            inputText: `a = 5, b = 3`,
            outputText: `8`,
            explanation: "The sum of 5 and 3 is 8.",
          },
          {
            id: 1,
            inputText: `a = 8, b = 4`,
            outputText: `12`,
            explanation: "The sum of 8 and 4 is 12.",
          },
          {
            id: 2,
            inputText: `a = 18, b = 2`,
            outputText: `20`,
            explanation: "The sum of 18 and 2 is 20.",
          },
	],
	constraints: `<li class='mt-2'><code>-10^6 <= a, b <= 10^6</code></li>`,
	starterCode: starterCodeSimpleMathProblemJS,
	handlerFunction: simpleMathProblemHandler,
	starterFunctionName: "function addNumbers(",
    order: 4,
};