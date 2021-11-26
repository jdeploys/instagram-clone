import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { Articles } from '@/api/Articles';
import { httpClient } from '@/config/axios';
import { Article, ArticlesListParams, UploadCreatePayload } from '@/api/data-contracts';
import { AuthContainer } from '@/container/auth';
import { Upload } from '@/api/Upload';
import { unionWith } from 'lodash';

interface CreateArticle {
  images: File[];
  content: string;
}

const useArticleHooks = () => {
  const articleApi = new Articles(httpClient);
  const uploadApi = new Upload(httpClient);
  const { user } = AuthContainer.useContainer();
  const [articleCount, setArticleCount] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleGetArticles = async (params: ArticlesListParams) => {
    return articleApi
      .countList()
      .then((result) => {
        // @ts-ignore (타입 불일치 임시처리)
        setArticleCount(result.data || 0);
      })
      .then(() => articleApi.articlesList(params))
      .then((result) => {
        console.log(unionWith(articles, result.data, (a, b) => a.id === b.id));
        setArticles((prevState) =>
          unionWith(prevState, result.data, (a, b) => a.id === b.id)
        );
      });
  };

  const createArticle = (data: CreateArticle) => {
    return articleApi.articlesCreate({
      user: user?.id,
      content: data.content,
    });
  };

  const uploadImage = (data: UploadCreatePayload) => {
    return uploadApi.uploadCreate(data);
  };

  return {
    articleCount,
    articles,
    getArticles: handleGetArticles,
    createArticle,
    uploadImage,
  };
};

export const ArticleContainer = createContainer(useArticleHooks);
