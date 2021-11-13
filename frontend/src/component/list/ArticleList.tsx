import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ArticleContainer } from '@/container/article';
import { toast } from 'react-toastify';
import CardSkeleton from '@/component/skeleton/card';
import ArticleCard from '@/component/card/ArticleCard';

const ArticleList = () => {
  const { articles, articleCount, getArticles } = ArticleContainer.useContainer();
  const [page, setPage] = useState({
    _limit: 10,
    _start: 0,
  });

  const refresh = () => {
    setPage({
      _limit: 10,
      _start: 0,
    });
  };

  const next = () => {
    setPage((prevState) => ({
      ...prevState,
      _start: prevState._start + 1,
    }));
  };

  useEffect(() => {
    if (articleCount !== 0 && articleCount <= articles.length) {
      return;
    }
    getArticles(page).catch((e) => {
      toast.error(e);
    });
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={articleCount}
      pullDownToRefreshThreshold={200}
      hasMore={articleCount > articles.length}
      loader={<CardSkeleton />}
      endMessage={
        <p className="text-center py-5">
          <b>👋 마지막 게시글이에요!</b>
        </p>
      }
      pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      }
      pullDownToRefresh
      next={next}
      refreshFunction={refresh}
    >
      {articles.map((row) => (
        <ArticleCard key={row.id} article={row} />
      ))}
    </InfiniteScroll>
  );
};

export default ArticleList;
