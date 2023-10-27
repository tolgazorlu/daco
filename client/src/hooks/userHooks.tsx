import { useMutation } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { UserInfo } from "../types/UserInfo";

export const useRegisterMutation = () =>
  useMutation({
    mutationFn: async ({
      username,
      email,
      password,
      isAdmin
    }: {
      username: string,
      email: string,
      password: string,
      isAdmin: boolean
    }) =>
      (
        await apiClient.post<UserInfo>(`api/user/register`, {
          username, 
          email,
          password,
          isAdmin
        })
      ).data,
  });