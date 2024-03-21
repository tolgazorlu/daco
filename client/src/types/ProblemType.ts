export type Problem = {
    _id: string;
    slug: string;
    level: string;
    title: string;
    description: keyof JSX.IntrinsicElements;
    answer: string;
    day: number;
    date: string;
};

export type SoFarProblems = {
    _id: string;
    problems: Problem[];
};
