import axios, { AxiosInstance } from 'axios';
import { AXIOS_TIMEOUT, BASE_HOLIDAY_API_URL } from '@/configs/constants';

/**
 * Create an Axios instance for making HTTP requests.
 *
 * @param {string} baseURL
 * @returns {AxiosInstance}
 */
export const createAxiosInstance = (baseURL: string): AxiosInstance =>
  axios.create({
    timeout: AXIOS_TIMEOUT,
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    }
  });

export const holidayAxiosInstance: AxiosInstance = createAxiosInstance(BASE_HOLIDAY_API_URL);
