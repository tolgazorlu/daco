import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { Problem, SoFarProblems } from "../types/ProblemType";
import { UserInfo } from "../types/UserInfo";

export const useGetProblemsQuery = () =>
    useQuery({
        queryKey: ["all"],
        queryFn: async () =>
            (await apiClient.get<Problem[]>(`api/problems/all`)).data,
    });

export const useGetProblemQuery = (slug: string) =>
    useQuery({
        queryKey: ["problem", slug],
        queryFn: async () =>
            (await apiClient.get<Problem>(`api/problems/${slug}`)).data,
    });

export const useGetProblemForEditQuery = (slug: string) =>
    useQuery({
        queryKey: ["problem-for-edit", slug],
        queryFn: async () =>
            (await apiClient.get<Problem>(`api/problems/editProblem/${slug}`))
                .data,
    });

export const useGetDailyProblemsQuery = () =>
    useQuery({
        queryKey: ["daily"],
        queryFn: async () =>
            (await apiClient.get<Problem[]>(`api/user/dailyProblems`)).data,
    });

export const useGetAllProblemsSoFarQuery = () =>
    useQuery({
        queryKey: ["problems-so-far"],
        queryFn: async () =>
            (await apiClient.get<SoFarProblems[]>(`api/user/allProblems`)).data,
    });

export const useGetSolvedProblemsQuery = () =>
    useQuery({
        queryKey: ["solved"],
        queryFn: async () =>
            (await apiClient.get<Problem[]>(`api/problems/solved`)).data,
    });

export const useCreateProblemMutation = () =>
    useMutation({
        mutationFn: async (problem: {
            day: number;
            title: string;
            level: string;
            description: string;
            answer: string;
            slug: string;
        }) =>
            (
                await apiClient.post<{ problem: Problem; slug: string }>(
                    `api/problems/create`,
                    problem,
                )
            ).data,
    });

export const useUpdateProblemMutation = () =>
    useMutation({
        mutationFn: async ({
            id,
            day,
            title,
            level,
            description,
            answer,
        }: {
            id: string;
            day: number;
            title: string;
            level: string;
            description: string;
            answer: string;
        }) =>
            (
                await apiClient.put<Problem>(`api/problems/update/${id}`, {
                    id,
                    day,
                    title,
                    level,
                    description,
                    answer,
                })
            ).data,
    });

export const usePublishProblemMutation = () =>
    useMutation({
        mutationFn: async ({ id }: { id: string }) =>
            (
                await apiClient.put<Problem>(`api/problems/publish/${id}`, {
                    id,
                })
            ).data,
    });

export const useDraftProblemMutation = () =>
    useMutation({
        mutationFn: async ({ id }: { id: string }) =>
            (
                await apiClient.put<Problem>(`api/problems/draft/${id}`, {
                    id,
                })
            ).data,
    });

export const useSolveProblemMutation = () =>
    useMutation({
        mutationFn: async ({ id, answer }: { id: string; answer: string }) =>
            (
                await apiClient.put<UserInfo>(
                    `api/problems/solveProblem/${id}`,
                    {
                        id,
                        answer,
                    },
                )
            ).data,
    });

export const useDeleteProblemMutation = () =>
    useMutation({
        mutationFn: async (problemId: string) =>
            (
                await apiClient.delete<{ message: string; problem: Problem[] }>(
                    `api/problems/${problemId}`,
                )
            ).data,
    });
