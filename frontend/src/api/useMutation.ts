import { useMutation } from "@tanstack/react-query";
import { api } from "../constants/config";
import { AxiosError, AxiosResponse } from "axios";
import { makeErrorMessage } from "./error";

export default function usePostRequest(
  path: string,
  payload: any,
  onSuccess: (data?: any) => void,
  onFailure: (error?: any) => void
) {
  const postRequest = async () => {
    try {
      const response = await api.post(path, payload);
      return response;
    } catch (error) {
      throw error;
    }
  };
  const mutation = useMutation({
    postRequest,
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error: AxiosError) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error.response?.status,
        errors: error.response?.data,
      });
    },
  });
  return mutation;
}

export function usePutRequest(
  path: string,
  payload: any,
  onSuccess: (data?: any) => void,
  onFailure: (error?: any) => void
) {
  const putRequest = () => api.put(path, payload);
  const mutation = useMutation({
    putRequest,
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error: AxiosError) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error?.response?.status,
        errors: error.response?.data,
      });
    },
  });
  return mutation;
}
export function usePatchRequest(
  path: string,
  payload: any,
  onSuccess: (data?: any) => void,
  onFailure: (error?: any) => void
) {
  const patchRequest = async () => await api.patch(path, payload);
  const mutation = useMutation({
    patchRequest,
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error: AxiosError) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error.response?.status,
      });
    },
  });
  return mutation;
}

export function useDeleteRequest(
  path: string,
  onSuccess: (data?: any) => void,
  onFailure: (error?: any) => void
) {
  const deleteRequest = () => api.delete(path);
  const mutation = useMutation({
    deleteRequest,
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error: AxiosError) => {
      onFailure({
        message: makeErrorMessage(error),
        statusCode: error.response?.status,
      });
    },
  });
  return mutation;
}
