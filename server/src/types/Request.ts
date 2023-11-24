declare namespace Express {
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
      solvedProblems: string[];
    };
    file: any
  }
}
