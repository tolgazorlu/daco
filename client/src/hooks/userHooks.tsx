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
                await apiClient.post<UserInfo>(`api/auth/login`, {
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
            role,
        }: {
            username: string;
            email: string;
            password: string;
            role: string;
        }) =>
            (
                await apiClient.post<UserInfo>(`api/auth/register`, {
                    username,
                    email,
                    password,
                    role,
                })
            ).data,
    });

export const useUpdateUserMutation = () =>
    useMutation({
        mutationFn: async ({
            username,
            email,
            avatar,
        }: {
            username: string;
            email: string;
            avatar: string;
        }) =>
            (
                await apiClient.put<UserInfo>(`api/user/update`, {
                    username,
                    email,
                    avatar,
                })
            ).data,
    });

export const useChangePasswordMutation = () =>
    useMutation({
        mutationFn: async ({
            currentPassword,
            newPassword,
        }: {
            currentPassword: string;
            newPassword: string;
        }) =>
            (
                await apiClient.put<UserInfo>(`api/auth/passwordUpdate`, {
                    currentPassword,
                    newPassword,
                })
            ).data,
    });

export const useUploadAvatarMutation = () =>
    useMutation({
        mutationFn: async ({
            image,
        }: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            image: any;
        }) =>
            (
                await apiClient.post<FormData>(`api/user/image`, {
                    image,
                })
            ).data,
    });

export const useGetUsersQuery = () =>
    useQuery({
        queryKey: ["all"],
        queryFn: async () =>
            (await apiClient.get<UserInfo[]>(`api/user/all`)).data,
    });

export const useDeleteUserMutation = () =>
    useMutation({
        mutationFn: async (userId: string) =>
            (
                await apiClient.delete<{ message: string; user: UserInfo[] }>(
                    `api/auth/delete/${userId}`,
                )
            ).data,
    });

export const useVerifyEmailMutation = () =>
    useMutation({
        mutationFn: async ({ id, token }: { id: string; token: string }) =>
            (
                await apiClient.put<UserInfo>(
                    `api/auth/${id}/verify/${token}`,
                    {
                        id,
                        token,
                    },
                )
            ).data,
    });
