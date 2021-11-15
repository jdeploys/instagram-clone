import axios from 'axios';
import { loadToken } from '@/shared/token';
import { HttpClient } from '@/api/http-client';

// API 주소 연결
axios.defaults.baseURL = 'https://jsbackend.herokuapp.com/';

// 공통 요청 처리
axios.interceptors.request.use(function (config) {
  const token = loadToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `bearer ${token}`,
    };
  }

  return config;
});

// 공통 오류 처리
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error?.response?.data?.message) {
      if (error.response.data.message.length) {
        return Promise.reject(error.response.data.message[0].messages[0].message);
      }
    }

    return Promise.reject(error);
  }
);

export const httpClient = new HttpClient();
