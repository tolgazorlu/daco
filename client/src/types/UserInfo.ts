export type UserInfo = {
  _id: string;
  username: string;
  email: string;
  token: string;
  avatar: string;
  isAdmin: boolean;
  createdAt: string;
  emailVerified: boolean;
  solvedProblems: string[];
};
