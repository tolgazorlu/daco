import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { Algorithm } from "../types/AlgorithmType";


export const useGetAlgorithmsQuery = () => useQuery({
    queryKey: ["all"],
    queryFn: async () => (await apiClient.get<Algorithm[]>(`api/algorithms/all`)).data
})

export const useGetAlgorithmQuery = (slug: string) => useQuery({
    queryKey: ["algorithm", slug],
    queryFn: async () => (await apiClient.get<Algorithm>(`api/algorithms/${slug}`)).data
})
