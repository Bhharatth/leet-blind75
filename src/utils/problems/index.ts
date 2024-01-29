import { Problem } from "../types/problemTypes";
import { simpleMathProblem } from "./simpleMathProblem";
// import { jumpGame } from "./jump-game";


interface MapProblemType  {
    [key: string]: Problem;
};

export const problems: MapProblemType = {
    "simple-math-problem": simpleMathProblem
}