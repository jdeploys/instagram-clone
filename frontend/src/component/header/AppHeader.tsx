import React from 'react';
import addImage from '@/asset/button/add.svg';
import { useHistory } from 'react-router-dom';
import { RoutePath } from '@/component/router/@types';
import { AuthContainer } from '@/container/auth';

interface AppHeaderProps {
  useWrite?: boolean;
}

const AppHeader = ({ useWrite }: AppHeaderProps) => {
  const history = useHistory();
  const { isSignIn } = AuthContainer.useContainer();

  return (
    <header className="flex flex-row items-center p-3 h-30">
      <div className="flex-1">
        <h1 className="text-2xl">Instagram</h1>
      </div>
      {/* 글쓰기 */}
      {useWrite && (
        <div>
          <button
            onClick={() => {
              if (!isSignIn) {
                history.push(RoutePath.SignIn);
                return;
              }
              history.push(RoutePath.CreateArticle);
            }}
          >
            <img alt="add" src={addImage} />
          </button>
        </div>
      )}
      {/* 원래 다른 버튼 있는데 여기선 제외 */}
    </header>
  );
};

export default AppHeader;
