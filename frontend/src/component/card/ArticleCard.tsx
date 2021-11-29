import React from 'react';
import heartImage from '@/asset/button/heart.svg';
import chatImage from '@/asset/button/chat.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Article } from '@/api/data-contracts';
import { AuthContainer } from '@/container/auth';
import DropdownButton from '@/component/button/DropdownButton';
import { ArticleContainer } from '@/container/article';

interface ArticleCardProps {
  article: Article;
  onDelete?: () => void;
}

const ArticleCard = ({ article, onDelete }: ArticleCardProps) => {
  const { user } = AuthContainer.useContainer();
  const { deleteArticle } = ArticleContainer.useContainer();

  return (
    <div className="border-b border-gray-200">
      <div className="flex flex-row items-center p-2">
        <div className="rounded-full w-10 h-10 bg-blue-100 flex justify-center items-center">
          <div>{article.user?.username.substr(0, 2)}</div>
        </div>
        <div className="flex-1 px-2 font-semibold">{article.user?.username}</div>
        {article.user?.id && article.user.id === user?.id && (
          <DropdownButton
            items={[
              {
                label: '삭제',
                onClick: () => {
                  if (confirm('지우시겠어요?')) {
                    deleteArticle(article.id).then(onDelete);
                  }
                },
              },
            ]}
          />
        )}
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
        {article.content && (
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
