import axios from 'axios';

export interface SignInParams {
  identifier: string;
  password: string;
}

export type SignUpParams = Components.Schemas.NewUsersPermissionsUser;

// 로그인
export const signIn = (params: SignInParams) => {
  const formData = new FormData();
  formData.append('identifier', params.identifier);
  formData.append('password', params.password);

  return axios.post<Components.Schemas.UsersPermissionsUser>('/auth/local', formData, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
};

// 회원가입
export const signUp = (params: SignUpParams) =>
  axios.post<SignUpParams>('/auth/local/register', params);
