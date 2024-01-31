import assert from "assert";
import { Problem } from "../types/problemTypes";

export const mathProblemHandler = (fn: any) => {
  try {
    const tests:any = [
      [3, 4],
      [0, 1],
      [-2, 5],
    ];
    const answers = [13, 1, -10];
    for (let i = 0; i < tests.length; i++) {
      const result = fn(tests[i][0], tests[i][1]);
      assert.strictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from mathProblemHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeMathProblemJS = `function mathOperation(a, b) {
  // Write your code here
};`;

export const mathProblem: Problem = {
  id: "math-problem",
  title: "Medium Level Math Problem",
  problemStatement: `<p class='mt-3'>
    You are given two numbers <code>a</code> and <code>b</code>. Perform a mathematical operation of your choice on these two numbers and return the result.
  </p>
  `,

  examples: [
    {
      id: 0,
      inputText: `a = 3, b = 4`,
      outputText: `13`,
      explanation: "Perform a mathematical operation to get the result.",
    },
    {
      id: 1,
      inputText: `a = 0, b = 1`,
      outputText: `1`,
      explanation: "Perform a mathematical operation to get the result.",
    },
    {
      id: 2,
      inputText: `a = -2, b = 5`,
      outputText: `-10`,
      explanation: "Perform a mathematical operation to get the result.",
    },
  ],
  constraints: `<li class='mt-2'><code>-10^5 <= a, b <= 10^5</code></li>`,
  starterCode: starterCodeMathProblemJS,
  handlerFunction: mathProblemHandler,
  starterFunctionName: "function mathOperation(",
  order: 10,
  solution: ""
};
