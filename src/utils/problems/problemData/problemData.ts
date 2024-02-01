export type ProblemData = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
};


export const problemData: ProblemData[] = [
	{
		id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
	},
	{
		id: "three-sum",
		title: "Three sum",
		difficulty: "Hard",
		category: "Array",
		order: 2,
	},
	{
		id: "medium-problem",
		title: "Medium Problem",
		difficulty: "Medium",
		category: "Array",
		order: 3,
	},
	{
		id: "best-time-to-buy-and-sell-stock",
		title: "Best Time to Buy and Sell Stock",
		difficulty: "Easy",
		category: "Array",
		order: 4,
	},
	{
		id: "subsets",
		title: "Subsets",
		difficulty: "Medium",
		category: "Array",
		order: 10,
	},
];