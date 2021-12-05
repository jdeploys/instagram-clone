import React, { useEffect, useState } from 'react';
import closeIcon from '@/asset/button/close.svg';
import nextIcon from '@/asset/button/next.svg';
import backIcon from '@/asset/button/back.svg';
import checkIcon from '@/asset/button/check.svg';
import { useHistory } from 'react-router-dom';
import { WriteArticleContainer } from '@/component/article/WriteArticleContainer';
import UploadArticleImage from '@/component/article/UploadArticleImage';
import WriteArticleContent from '@/component/article/WriteArticleContent';
import { ArticleContainer } from '@/container/article';
import { toast } from 'react-toastify';
import { RoutePath } from '@/component/router/@types';
import Loading from '@/component/loader/Loading';

enum Page {
  Image,
  Content,
}

const WriteArticlePageContent = () => {
  const history = useHistory();
  const [page, setPage] = useState<Page>(Page.Image);
  const { uploadImages, getFormToContent } = WriteArticleContainer.useContainer();
  const { createArticle, uploadImage } = ArticleContainer.useContainer();
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmitSuccess = () => {
    toast.success('등록되었습니다.');
    history.push(RoutePath.ArticleList);
  };

  const submit = async () => {
    const articleResult = await createArticle({
      images: uploadImages,
      content: getFormToContent(),
    });

    if (!articleResult) {
      toast.error(`글이 등록되지 못했어요!`);
      return;
    }

    if (uploadImages?.length) {
      const { id } = articleResult.data;
      return Promise.all(
        uploadImages.map((image) =>
          uploadImage({
            files: image,
            ref: 'article',
            refId: id,
            field: 'files',
          })
        )
      );
    }
  };

  const onClickSubmit = () => {
    if (page === Page.Image) {
      setPage(Page.Content);
      return;
    }
    setIsSubmit(true);
    submit()
      .then(() => {
        onSubmitSuccess();
      })
      .catch((e) => {
        toast.error(`오류가 발생했어요! ${e}`);
      })
      .finally(() => {
        setIsSubmit(false);
      });
  };

  return (
    <div>
      <Loading isShow={isSubmit} />
      <div className="flex flex-row items-center gap-2 h-30 p-3">
        <button
          onClick={() => {
            if (page === Page.Image) {
              history.goBack();
              return;
            }

            setPage(Page.Image);
          }}
        >
          <img
            alt="back"
            src={page === Page.Image ? closeIcon : backIcon}
            width={24}
            height={24}
          />
        </button>

        <div className="flex-1 text-xl">새 게시물</div>

        <button onClick={onClickSubmit}>
          <img
            alt="next"
            src={page === Page.Image ? nextIcon : checkIcon}
            width={24}
            height={24}
          />
        </button>
      </div>
      {page === Page.Image && <UploadArticleImage />}
      {page === Page.Content && <WriteArticleContent />}
    </div>
  );
};

export default () => (
  <ArticleContainer.Provider>
    <WriteArticleContainer.Provider>
      <WriteArticlePageContent />
    </WriteArticleContainer.Provider>
  </ArticleContainer.Provider>
);
