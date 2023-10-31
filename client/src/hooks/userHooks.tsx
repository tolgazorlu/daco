import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { UserInfo } from "../types/UserInfo";

export const useLoginMutation = () =>
  useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) =>
      (
        await apiClient.post<UserInfo>(`api/user/login`, {
          email,
          password,
        })
      ).data,
  });


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

  export const useGetUsersQuery = () => useQuery({
    queryKey: ["all"],
    queryFn: async () => (await apiClient.get<UserInfo[]>(`api/user/all`)).data
})