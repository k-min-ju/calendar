import { AxiosRequestConfig } from 'axios';

interface ApiRequest {
  <T>(url: string, config?: AxiosRequestConfig): Promise<T>;

  <T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;

  <T, D>(url: string, data: D, config?: AxiosRequestConfig): Promise<T>;
}

export type AxiosMethods = Record<'axiosGet' | 'axiosPost' | 'axiosPatch' | 'axiosPut' | 'axiosDelete', ApiRequest>;
