import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { loadToken, removeToken, saveToken } from '@/shared/token';
import { Auth } from '@/api/Auth';
import { httpClient } from '@/config/axios';
import { UsersPermissionsUser } from '@/api/data-contracts';
import { SignInParams } from '@/api/@types/auth';

// 인증 정보 관리
const useAuthHooks = () => {
  const authApi = new Auth(httpClient);
  const localToken = loadToken();

  // 로그인 여부
  const [isSignIn, setIsSignIn] = useState(!!localToken);
  const [user, setUser] = useState<UsersPermissionsUser | null>();

  const handleSignIn = (params: SignInParams) => {
    return authApi.localCreate(params)
      .then((result) => {
        setIsSignIn(true);
        saveToken(result.data.jwt || '');
        setUser(result.data.user);
        return result.data;
      })
      .catch((e) => {
        setIsSignIn(false);
        return e;
      });
  };

  const signOut = () => {
    removeToken();
    setUser(null);
  }

  return {
    isSignIn,
    signIn: handleSignIn,
    signOut,
    user,
  };
};

export const AuthContainer = createContainer(useAuthHooks);
