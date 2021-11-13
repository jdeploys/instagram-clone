import axios from 'axios';
import { SignInParams, SignUpParams, TokenResult } from './@types/user';


// 로그인
export const signIn = (params: SignInParams) => {
  const formData = new FormData();
  formData.append('identifier', params.identifier);
  formData.append('password', params.password);

  return axios.post<TokenResult>('/auth/local', formData, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
};

// 회원가입
export const signUp = (params: SignUpParams) =>
  axios.post<SignUpParams>('/auth/local/register', params);
