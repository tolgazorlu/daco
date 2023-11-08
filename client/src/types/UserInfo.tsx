import { Problem } from "./ProblemType"

export type UserInfo = {
    username: string,
    email: string,
    token: string, 
    avatar: string,
    isAdmin: boolean,
    createdAt: string,
    solvedProblems: Problem
}