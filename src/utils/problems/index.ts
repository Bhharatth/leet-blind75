import { Problem } from "../types/problemTypes";
import { simpleMathProblem } from "./simpleMathProblem";


interface MapProblemType  {
    [key: string]: Problem;
};

export const problems: MapProblemType = {
    "simple-math-problem": simpleMathProblem
}