import { useCallback } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { holidayAxiosInstance } from '@/services/axiosInstance';
import { AxiosMethods } from '@/types';

export const useAxios = (): AxiosMethods => {
  const axiosGet = useCallback(async <T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await holidayAxiosInstance.get<T>(url, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    }
  }, []);

  const axiosPost = useCallback(async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await holidayAxiosInstance.post<T>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    }
  }, []);

  const axiosPatch = useCallback(async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await holidayAxiosInstance.patch<T>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    }
  }, []);

  const axiosPut = useCallback(async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await holidayAxiosInstance.put<T>(url, data, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
    }
  }, []);

  const axiosDelete = useCallback(async <T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await holidayAxiosInstance.delete<T>(url, config);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Axios error: ${error.message}`);
      } else {
        throw new Error(`General error: ${error}`);
      }
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
