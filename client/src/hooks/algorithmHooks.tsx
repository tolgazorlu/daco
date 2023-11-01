import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { Algorithm } from "../types/AlgorithmType";

export const useGetAlgorithmsQuery = () =>
  useQuery({
    queryKey: ["all"],
    queryFn: async () =>
      (await apiClient.get<Algorithm[]>(`api/algorithms/all`)).data,
  });

export const useGetAlgorithmQuery = (slug: string) =>
  useQuery({
    queryKey: ["algorithm", slug],
    queryFn: async () =>
      (await apiClient.get<Algorithm>(`api/algorithms/${slug}`)).data,
  });

export const useGetDailyAlgorithmQuery = () =>
  useQuery({
    queryKey: ["daily"],
    queryFn: async () =>
      (await apiClient.get<Algorithm[]>(`api/algorithms/daily`)).data,
  });

export const useCreateAlgorithmQuery = () =>
  useMutation({
    mutationFn: async (algorithm: {
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
        await apiClient.post<{ algorithm: Algorithm }>(
          `api/algorithms/createAlgorithm`,
          algorithm
        )
      ).data,
  });

  export const useDeleteProblemMutation = () =>
  useMutation({
    mutationFn: async (problemId: string) =>
      (
        await apiClient.delete<{ message: string; problem: Algorithm[] }>(
          `api/algorithms/${problemId}`
        )
      ).data,
  });
