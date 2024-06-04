type solvedProblems = {
    problemId: string;
    date: string;
};

export type UserInfo = {
    username: string;
    token: string;
    avatar: string;
    role: string;
    createdAt: string;
    emailVerified: boolean;
    solvedProblems: solvedProblems[];
    currentDay: number;
    email: string;
};
