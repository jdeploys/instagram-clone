import React, { useEffect } from 'react';
import Button from '@/component/button/Button';
import AppHeader from '@/component/header/AppHeader';
import { AuthContainer } from '@/container/auth';
import { useHistory } from 'react-router-dom';
import { RoutePath } from '@/component/router/@types';
import { toast } from 'react-toastify';

const MyPage = () => {
  const history = useHistory();
  const { user, isSignIn, signOut } = AuthContainer.useContainer();

  useEffect(() => {
    if (!isSignIn) {
      history.push(RoutePath.SignIn);
    }
  }, [isSignIn]);

  const onClickSignOut = () => {
    if (window.confirm('정말 로그아웃 할까요?')) {
      signOut();
    }
  };

  return (
    <div>
      <AppHeader />
      <div className="flex flex-col p-3">
        <div className="my-3">
          <b className="text-lg">{user?.username}</b> 님 안녕하세요!
        </div>
        <Button className="h-10" onClick={onClickSignOut}>
          로그아웃
        </Button>
      </div>
    </div>
  );
};

export default MyPage;
