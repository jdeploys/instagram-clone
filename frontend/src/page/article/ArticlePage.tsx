import React from 'react';
import AppHeader from '@/component/header/AppHeader';
import ArticleList from '@/component/list/ArticleList';
import { ArticleContainer } from '@/container/article';

const ArticlePage = () => {
  return (
    <div>
      <AppHeader useWrite />
      <div className="w-full border-t border-gray-200" />
      <ArticleContainer.Provider>
        <ArticleList />
      </ArticleContainer.Provider>
    </div>
  );
};

export default ArticlePage;
