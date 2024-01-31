import assert from "assert";
import { Problem } from "../types/problemTypes";

export const maxProfitHandler = (fcn: any) => {
  try {
    const tests = [
      [7, 1, 5, 3, 6, 4],
      [7, 6, 4, 3, 1],
      [3, 2, 6, 5, 0, 3],
      [1, 2, 3, 4, 5],
    ];
    const answers = [5, 0, 4, 4];
    for (let i = 0; i < tests.length; i++) {
      const result = fcn(tests[i]);
      assert.equal(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("Error from maxProfitHandler: ", error);
    throw new Error(error);
  }
};

const starterCodeMaxProfitJS = `function maxProfit(prices) {
  // Write your code here
};`;

const problemSolution = `function maxProfit(prices) {
    if (prices.length <= 1) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Update minimum price if current price is lower
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Update maximum profit if selling at current price yields higher profit
    else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }

  return maxProfit;
};`

export const maxProfit: Problem = {
  id: "max-profit",
  title: "121. Best Time to Buy and Sell Stock",
  problemStatement: `<p class='mt-3'>
    You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day.
  </p>
  <p class='mt-3'>
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
  </p>
  `,

  examples: [
    {
      id: 0,
      inputText: `prices = [7, 1, 5, 3, 6, 4]`,
      outputText: `5`,
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
    },
    {
      id: 1,
      inputText: `prices = [7, 6, 4, 3, 1]`,
      outputText: `0`,
      explanation: "In this case, no transactions are done, and the max profit = 0.",
    },
  ],
  constraints: `<li class='mt-2'><code>1 <= prices.length <= 10^5</code></li>
    <li class='mt-2'><code>0 <= prices[i] <= 10^4</code></li>`,
  starterCode: starterCodeMaxProfitJS,
  handlerFunction: maxProfitHandler,
  starterFunctionName: "function maxProfit(",
  order: 11,
  solution:problemSolution
};
