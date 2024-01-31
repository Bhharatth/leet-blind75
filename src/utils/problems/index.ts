import { Problem } from "../types/problemTypes";
import { maxProfit, maxProfitHandler } from "./Best-Time-to-Buy-and-Sell-Stock";
import { jumpGame } from "./jump-game";
import { mathProblem } from "./medium-problem";
import { simpleMathProblem } from "./simpleMathProblem";
import { threeSum } from "./three-sum";
import { twoSum } from "./two-sum";


interface MapProblemType  {
    [key: string]: Problem;
};

export const problems: MapProblemType = {
    "simple-math-problem": simpleMathProblem,
    "two-sum": twoSum,
    "Jump-game": jumpGame,
    "three-sum": threeSum,
    "medium-problem": mathProblem,
    "Best-Time-to-Buy-and-Sell-Stock": maxProfit
}