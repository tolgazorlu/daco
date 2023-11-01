import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { Problem } from "../types/ProblemType";

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

export const useCreateProblemQuery = () =>
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
          `api/problems/createAlgorithm`,
          problem
        )
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
