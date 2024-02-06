import { Problem } from "../types/problemTypes";
import { maxProfit, maxProfitHandler } from "./Best-Time-to-Buy-and-Sell-Stock";
import { containsDuplicate } from "./contains-duplicate";
import { mathProblem } from "./medium-problem";
import { productExceptSelf } from "./product-of-array-except-self";
import { simpleMathProblem } from "./simpleMathProblem";
import { threeSum } from "./three-sum";
import { twoSum } from "./two-sum";


interface MapProblemType  {
    [key: string]: Problem;
};

export const problems: MapProblemType = {
    "simple-math-problem": simpleMathProblem,
    "two-sum": twoSum,
    "three-sum": threeSum,
    "medium-problem": mathProblem,
    "best-time-to-buy-and-sell-stock": maxProfit,
    "contains-duplicate": containsDuplicate,
    "product-of-array-except-self": productExceptSelf
}