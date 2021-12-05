import React, { useEffect, useState } from 'react';
import Input from '@/component/form/Input';
import Button from '@/component/button/Button';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { RoutePath } from '@/component/router/@types';
import { AuthContainer } from '@/container/auth';
import { SignInParams } from '@/api/@types/auth';

const SignInPage = () => {
  const history = useHistory();
  const { signIn, isSignIn } = AuthContainer.useContainer();
  const [data, setData] = useState<SignInParams>({
    identifier: '',
    password: '',
  });

  useEffect(() => {
    if (isSignIn) {
      history.push(RoutePath.ArticleList);
    }
  }, [isSignIn]);

  const onClickSignIn = () => {
    signIn(data).catch((e) => {
      toast.error(
        <span>
          로그인에 실패했습니다.
          <br />
          {e}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col items-center py-5">
      <h1 className="text-5xl my-5">Instagram</h1>
      <section className="w-full flex flex-col justify-center">
        <Input
          className="mx-10"
          type="email"
          placeholder="사용자 이름 또는 이메일"
          onChangeText={(value) => {
            setData((prev) => ({
              ...prev,
              identifier: value,
            }));
          }}
        />
        <Input
          className="mx-10 mt-2"
          type="password"
          placeholder="비밀번호"
          onKeyPress={(e) => {
            if (e.key.toLowerCase() === 'enter') {
              onClickSignIn();
            }
          }}
          onChangeText={(value) => {
            setData((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Button
          className="mx-10 mt-3"
          disabled={!(data.password.length > 3 && data.identifier)}
          onClick={onClickSignIn}
        >
          로그인
        </Button>
      </section>
      <div className="flex w-full px-10 mt-3">
        <div className="flex-1 flex items-center">
          <div className="border-t border-gray-300 w-full" />
        </div>
        <div className="px-5">또는</div>
        <div className="flex-1 flex items-center">
          <div className="border-t border-gray-300 w-full" />
        </div>
      </div>
      <div className="mt-5">
        <button>비밀 번호를 잊으셨나요?</button>
      </div>
      <div className="flex mt-10">
        계정이 없으신가요?{' '}
        <button
          className="ml-2 text-blue-500 font-semibold"
          onClick={() => {
            history.push(RoutePath.SignUp);
          }}
        >
          가입하기
        </button>
      </div>
      <div className="mt-20 text-center text-gray-400">
        이 앱은 단순 공부용으로 제작되었습니다.
        <br />
        인스타그램 클론 프로젝트 임을 밝히며
        <br />
        상업적 용도가 없음을 밝힙니다.
        <div className="mt-3 text-blue-300">
          <a href="https://github.com/jdeploys">Made by jskim</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
