type solvedProblems = {
    problemId: string;
    date: string;
};

export type UserInfo = {
    _id: string;
    username: string;
    email: string;
    token: string;
    avatar: string;
    isAdmin: boolean;
    createdAt: string;
    emailVerified: boolean;
    solvedProblems: solvedProblems[];
};
