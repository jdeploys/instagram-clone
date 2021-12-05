import { createContainer } from 'unstated-next';
import { useEffect, useState } from 'react';
import { loadToken, removeToken, saveToken } from '@/shared/token';
import { Auth } from '@/api/Auth';
import { httpClient } from '@/config/axios';
import { UsersPermissionsUser } from '@/api/data-contracts';
import { SignInParams } from '@/api/@types/auth';
import { Users } from '@/api/Users';

// 인증 정보 관리
const useAuthHooks = () => {
  const authApi = new Auth(httpClient);
  const userApi = new Users(httpClient);
  const localToken = loadToken();

  // 로그인 여부
  const [isSignIn, setIsSignIn] = useState(!!localToken);
  const [user, setUser] = useState<UsersPermissionsUser | null>();

  const handleSignIn = (params: SignInParams) => {
    const formDataParams = new FormData();
    formDataParams.append('identifier', params.identifier);
    formDataParams.append('password', params.password);

    return authApi
      // @ts-ignore 해당 부분 수정 가능할때 수정
      .localCreate(formDataParams)
      .then((result) => {
        setIsSignIn(true);
        saveToken(result.data.jwt || '');
        return result.data;
      })
      .catch((e) => {
        setIsSignIn(false);
        return e;
      });
  };

  const signOut = () => {
    removeToken();
    setIsSignIn(false);
  };

  useEffect(() => {
    if (isSignIn) {
      userApi.getUsers().then((result) => {
        setUser(result.data);
      });
    } else {
      setUser(null);
    }
  }, [isSignIn]);

  return {
    isSignIn,
    signIn: handleSignIn,
    signOut,
    user,
  };
};

export const AuthContainer = createContainer(useAuthHooks);
