export type Problem = {
    _id: string;
    sequence: number;
    slug: string;
    level: string;
    title: string;
    description: keyof JSX.IntrinsicElements;
    answer: string;
    day: number;
    date: string;
};
