import React from 'react';
import { WriteArticleContainer } from '@/component/article/WriteArticleContainer';
import Input from '@/component/form/Input';

const WriteArticleContent = () => {
  const {
    uploadImages,
    form: { register, handleSubmit },
  } = WriteArticleContainer.useContainer();

  return (
    <form
      className="flex flex-col gap-3 p-3"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="flex flex-row h-20 items-center gap-3">
        {!!uploadImages?.length && (
          <div>
            <img
              className="h-20"
              alt="thumbnail"
              src={URL.createObjectURL(uploadImages[0])}
            />
          </div>
        )}
        <input
          className="flex-1 border rounded-md border-gray-200 h-10 px-2"
          type="text"
          placeholder="문구 입력..."
          {...register('content')}
        />
      </div>
      <div className="flex">
        <input
          className="flex-1 border rounded-md border-gray-200 h-10 px-2"
          placeholder="사람 태그하기"
          {...register('tag')}
        />
      </div>
      <div className="flex">
        <input
          className="flex-1 border rounded-md border-gray-200 h-10 px-2"
          placeholder="위치 추가"
          {...register('location')}
        />
      </div>
      {/* 나머진 패스 ! */}
    </form>
  );
};

export default WriteArticleContent;
