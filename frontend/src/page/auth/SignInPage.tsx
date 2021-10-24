import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <h1 className="text-5xl my-5">Instagram</h1>
      <section className="flex flex-col">
        <input type="email" />
        <input type="password" />
        <button>로그인</button>
      </section>
      <div>또는</div>
      <div>
        <button>비밀 번호를 잊으셨나요?</button>
        <div className="flex">
          계정이 없으신가요? <button>가입하기</button>
        </div>
      </div>
      <div>
        이 앱은 공부용으로 제작되었으며 상업용 프로젝트가 아닙니다.
      </div>
    </div>
  );
};

export default SignInPage;
