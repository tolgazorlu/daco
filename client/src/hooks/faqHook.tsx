import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { FAQ } from "../types/FAQ";

export const useCreateFaqMutation = () =>
  useMutation({
    mutationFn: async (faq: { title: string; description: string }) =>
      (await apiClient.post<{ faq: FAQ }>(`api/faq/create`, faq)).data,
  });

export const useGetFAQsQuery = () =>
  useQuery({
    queryKey: ["all"],
    queryFn: async () => (await apiClient.get<FAQ[]>(`api/faq/all`)).data,
  });

export const useEditFAQMutation = () =>
  useMutation({
    mutationFn: async ({
      id,
      title,
      description,
    }: {
      id: string;
      title: string;
      description: string;
    }) =>
      (
        await apiClient.put<FAQ>(`api/faq/update/${id}`, {
          id,
          title,
          description,
        })
      ).data,
  });

export const useDeleteFAQMutation = () =>
  useMutation({
    mutationFn: async (problemId: string) =>
      (
        await apiClient.delete<{ problem: FAQ[] }>(
          `api/faq/delete/${problemId}`,
        )
      ).data,
  });
