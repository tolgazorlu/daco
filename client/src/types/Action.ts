import { UserInfo } from "./UserInfo";

export type Action =
  | { type: "USER_SIGNIN"; payload: UserInfo }
  | { type: "USER_SIGNOUT" }