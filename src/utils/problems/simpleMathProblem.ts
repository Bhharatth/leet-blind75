import assert from "assert";
import { Problem } from "../types/problemTypes";

const starterCodeSimpleMathProblemJS = `function addNumbers(a, b) {
  // Write your code here
};`;

const simpleMathProblemHandler = (fn: any) => {
  try {
    const nums: number[][] = [
      [5, 3],   // Test case 1
      // [8, 4],   // Test case 2
      // [18, 2],  // Test case 3
    ];
    const answers = [8];

      const result = fn(5,3) as number; // Use non-null assertion
      assert.equal(result, answers);
    return true;
  } catch (error: any) {
    console.log("Error : ", error);
    throw new Error(error);
  }
};

export const simpleMathProblem: Problem = {
  id: "simple-math-problem",
  title: "Simple Math Problem",
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
  handlerFunction: simpleMathProblemHandler,
  starterCode: starterCodeSimpleMathProblemJS,
  order: 4,
  starterFunctionName: "function addNumbers(",
  solution: ""
};
