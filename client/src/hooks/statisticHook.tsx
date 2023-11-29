import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export const useGetTotalProblemsQuery = () =>
  useQuery({
    queryKey: ["Total Problems"],
    queryFn: async () =>
      (
        await apiClient.get<{ countProblems: number }>(
          `api/statistic/totalProblems`,
        )
      ).data,
  });

export const useGetTotalUsersQuery = () =>
  useQuery({
    queryKey: ["Total USers"],
    queryFn: async () =>
      (await apiClient.get<{ totalUsers: number }>(`api/statistic/totalUsers`))
        .data,
  });

export const useGetDayQuery = () =>
  useQuery({
    queryKey: ["Today"],
    queryFn: async () =>
      (
        await apiClient.get<{ day: number; todaysDate: string }>(
          `api/statistic/day`,
        )
      ).data,
  });

export const useGetTodaysUsersQuery = () =>
  useQuery({
    queryKey: ["Today"],
    queryFn: async () =>
      (
        await apiClient.get<{ todaysUsers: number }>(
          `api/statistic/todaysUsers`,
        )
      ).data,
  });
