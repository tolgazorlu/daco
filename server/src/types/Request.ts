declare namespace Express {

  interface solvedProblems{
    problemId: string
    date: string
  }
  export interface Request {
    user: {
      _id: string;
      username: string;
      email: string;
      avatar: string;
      isAdmin: boolean;
      token: string;
      emailVerified: boolean;
      verificationToken: string;
      solvedProblems: solvedProblems[]
      currentDay: number;
      createdAt: Date;
    };
    file: any
  }
}
