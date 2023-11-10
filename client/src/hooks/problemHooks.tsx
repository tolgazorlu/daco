import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { Problem } from "../types/ProblemType";
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

export const useGetDailyProblemsQuery = () =>
  useQuery({
    queryKey: ["daily"],
    queryFn: async () =>
      (await apiClient.get<Problem[]>(`api/problems/daily`)).data,
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
      date: string;
      title: string;
      slug: string;
      sequence: number;
      level: string;
      description: string;
      example: string;
      constrain: string;
      answer: string;
    }) =>
      (
        await apiClient.post<{ problem: Problem }>(
          `api/problems/create`,
          problem
        )
      ).data,
  });

export const useUpdateProblemMutation = () =>
  useMutation({
    mutationFn: async ({
      id,
      day,
      date,
      title,
      slug,
      sequence,
      level,
      description,
      example,
      constrain,
      answer,
    }: {
      id: string;
      day: number;
      date: string;
      title: string;
      slug: string;
      sequence: number;
      level: string;
      description: string;
      example: string;
      constrain: string;
      answer: string;
    }) =>
      (
        await apiClient.put<Problem>(`api/problems/update/${id}`, {
          id,
          day,
          date,
          title,
          slug,
          sequence,
          level,
          description,
          example,
          constrain,
          answer,
        })
      ).data,
  });

export const useSolveProblemMutation = () =>
  useMutation({
    mutationFn: async ({ id, answer }: { id: string; answer: string }) =>
      (
        await apiClient.put<UserInfo>(`api/problems/solveProblem/${id}`, {
          id,
          answer,
        })
      ).data,
  });

export const useDeleteProblemMutation = () =>
  useMutation({
    mutationFn: async (problemId: string) =>
      (
        await apiClient.delete<{ message: string; problem: Problem[] }>(
          `api/problems/${problemId}`
        )
      ).data,
  });
