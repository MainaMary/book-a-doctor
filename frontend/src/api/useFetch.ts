import { AxiosError } from "axios";
import axios, { AxiosInstance } from "axios";
import { useQuery } from "@tanstack/react-query";

export interface FetchResults {
  isLoading: boolean;
  isRefreshing: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: false | ErrorType;
  data: any;
  refetch?: () => void;
}
export default function useFetch(): FetchResults {
  const { isLoading, isSuccess, data, refetch, error } = useQuery(
    name,
    async () => {
      const response = await axiosInstance.get(path);
      return response.data;
    }
  );
}
