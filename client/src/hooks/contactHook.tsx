import { useMutation } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";
import { Contact } from "../types/Contact";

export const useCreateContactMutation = () =>
  useMutation({
    mutationFn: async (contact: {
      email: string;
      subject: string;
      message: string;
    }) =>
      (
        await apiClient.post<{ contact: Contact }>(
          `api/contact/create`,
          contact,
        )
      ).data,
  });
