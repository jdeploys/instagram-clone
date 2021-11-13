import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { loadToken, removeToken, saveToken } from '@/shared/token';
import { signIn } from '@/api/users.api';
import { SignInParams, User } from '@/api/@types/user';

// 인증 정보 관리
const useAuthHooks = () => {
  const localToken = loadToken();

  // 로그인 여부
  const [isSignIn, setIsSignIn] = useState(!!localToken);
  const [user, setUser] = useState<User | null>();

  const handleSignIn = (params: SignInParams) => {
    return signIn(params)
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
