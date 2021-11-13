import { createContainer } from 'unstated-next';
import { getArticles, getArticleCount } from '@/api/article.api';
import { useState } from 'react';
import { Article, GetArticleParams } from '@/api/@types/article';

const useArticleHooks = () => {
  const [articleCount, setArticleCount] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleGetArticles = async (params: GetArticleParams) => {
    return getArticleCount()
      .then((result) => {
        setArticleCount(result.data.count);
      })
      .then(() => getArticles(params))
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
