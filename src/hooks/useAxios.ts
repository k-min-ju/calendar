import { useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { holidayAxiosInstance } from '@/services/axiosInstance';
import { AxiosMethods } from '@/types';
import { useLoading } from '@/context/LoadingProvider.tsx';

export const useAxios = (): AxiosMethods => {
  const { setIsLoading } = useLoading();
  const axiosGet = useCallback(async <T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<T> => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<T> = await holidayAxiosInstance.get<T>(url, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const axiosPost = useCallback(async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<T> = await holidayAxiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const axiosPatch = useCallback(async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<T> = await holidayAxiosInstance.patch<T>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const axiosPut = useCallback(async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<T> = await holidayAxiosInstance.put<T>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const axiosDelete = useCallback(async <T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<T> => {
    try {
      setIsLoading(true);
      const response: AxiosResponse<T> = await holidayAxiosInstance.delete<T>(url, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    axiosGet,
    axiosPost,
    axiosPatch,
    axiosPut,
    axiosDelete
  };
};
