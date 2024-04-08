import { useMutation } from "@tanstack/react-query";
import { api } from "../constants/config";
import { AxiosError } from "axios";
import { makeErrorMessage } from "./useFetch";

export default function usePostRequest(
  path: string,
  payload: any,
  onSuccess: (data?: any) => void,
  onFailure: (error?: any) => void
) {
  const postRequest = () => api.post(path, payload);
  const mutation = useMutation(postRequest, {
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
  const mutation = useMutation(putRequest, {
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
  const putRequest = () => api.patch(path, payload);
  const mutation = useMutation(putRequest, {
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
  payload: any,
  onSuccess: (data?: any) => void,
  onFailure: (error?: any) => void
) {
  const deleteRequest = () => api.delete(path);
  const mutation = useMutation(deleteRequest, {
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
