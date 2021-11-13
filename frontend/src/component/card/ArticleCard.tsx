import React from 'react';
import { Article } from '@/api/@types/article';
import heartImage from '@/asset/button/heart.svg';
import chatImage from '@/asset/button/chat.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="border-b border-gray-200">
      <div className="flex flex-row items-center p-2">
        <div className="rounded-full w-10 h-10 bg-blue-100 flex justify-center items-center">
          <div>{article.user?.username.substr(0, 2)}</div>
        </div>
        <div className="px-2 font-semibold">{article.user?.username}</div>
      </div>
      <Carousel showThumbs={false} dynamicHeight>
        {article.files?.map((row) => (
          <div key={row.id} className="min-w-full">
            <img src={row.url} width="100%" />
          </div>
        ))}
      </Carousel>
      <div className="p-2">
        <div className="flex flex-row py-2 px-1">
          <button>
            <img src={heartImage} alt="heart" />
          </button>
          <button className="ml-3">
            <img src={chatImage} alt="reply" />
          </button>
        </div>
        <div className="font-semibold">100 Likes</div>
        <div className="mt-2">{article.content}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
