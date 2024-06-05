import { useQuery } from "@tanstack/react-query";
import { api } from "../constants/config";

export interface FetchResults {
  isLoading: boolean;
  isRefreshing: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: false | ErrorType | any;
  data: any;
  refetch?: () => void;
}
export type ErrorType = {
  message?: string;
  statusCode?: number;
  errors: any;
};

export default function useFetch(
  name: string | string[] | any,
  path: string
): FetchResults {
  const {
    isLoading,
    isSuccess,
    isError,
    isFetching: isRefreshing,
    data,
    error,
    refetch,
  } = useQuery({
    queryKey: name,
    queryFn: async () => {
      const response = await api.get(path);
      return response.data;
    },
  });
  return {
    isLoading,
    isRefreshing,
    isSuccess,
    isError,
    data,
    refetch,
    error,
    // error: {
    //   message: error ? makeErrorMessage(error as AxiosError) : "",
    //   statusCode: (error as AxiosError)?.response?.status || 0,
    // },
  };
}
