import { createContainer } from 'unstated-next';
import { useState } from 'react';
import { Articles } from '@/api/Articles';
import { httpClient } from '@/config/axios';
import { Article, ArticlesListParams } from '@/api/data-contracts';

const useArticleHooks = () => {
  const articleApi = new Articles(httpClient);
  const [articleCount, setArticleCount] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleGetArticles = async (params: ArticlesListParams) => {
    return articleApi.countList()
      .then((result) => {
        setArticleCount(result.data.count || 0);
      })
      .then(() => articleApi.articlesList(params))
      .then((result) => {
        setArticles(result.data);
      });
  };

  return {
    articleCount,
    articles,
    getArticles: handleGetArticles,
  };
};

export const ArticleContainer = createContainer(useArticleHooks);
