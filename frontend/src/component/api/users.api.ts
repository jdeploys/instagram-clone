import axios from 'axios';

export interface SignInParams {
  identifier: string;
  password: string;
}

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
