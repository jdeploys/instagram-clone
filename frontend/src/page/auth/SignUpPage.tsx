import React, { useState } from 'react';
import Input from '@/component/form/Input';
import Button from '@/component/button/Button';
import { signUp, SignUpParams } from '@/api/users.api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { RoutePath } from '@/component/router/@types';

const SignUpPage = () => {
  const [data, setData] = useState<SignUpParams>({
    email: '',
    password: '',
    username: '',
  });
  const history = useHistory();

  const onClickSignUp = () => {
    signUp(data)
      .then((result) => {
        if (result.status === 200) {
          toast('회원가입 되었습니다!', {
            autoClose: 1000,
          });
          history.push(RoutePath.signIn);
        }
      })
      .catch((e) => {
        toast.error(
          <span>
            회원가입에 실패했습니다.
            <br />
            {e}
          </span>
        );
      });
  };

  return (
    <div className="flex flex-col items-center py-5">
      <h1 className="text-5xl my-5">Instagram</h1>
      <h4 className="mb-5 text-gray-500">친구들의 사진과 동영상을 보려면 가입하세요.</h4>
      <section className="w-full flex flex-col justify-center">
        <Input
          className="mx-10"
          type="email"
          placeholder="이메일 주소"
          onChangeText={(value) => {
            setData((prev) => ({
              ...prev,
              email: value,
            }));
          }}
        />
        <Input
          className="mx-10 mt-2"
          placeholder="사용자 이름"
          onChangeText={(value) => {
            setData((prev) => ({
              ...prev,
              username: value,
            }));
          }}
        />
        <Input
          className="mx-10 mt-2"
          type="password"
          placeholder="비밀번호"
          onChangeText={(value) => {
            setData((prev) => ({
              ...prev,
              password: value,
            }));
          }}
        />
        <Button
          className="mx-10 mt-3"
          disabled={
            !((data.password?.length || 0) > 3 && data.email && data.username.length > 2)
          }
          onClick={onClickSignUp}
        >
          가입
        </Button>
      </section>
      <div className="flex mt-10">
        계정이 있으신가요?{' '}
        <button className="ml-2 text-blue-500 font-semibold">로그인</button>
      </div>
    </div>
  );
};

export default SignUpPage;
