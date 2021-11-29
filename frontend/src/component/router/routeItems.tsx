import { RouteProps } from 'react-router';
import { RoutePath } from './@types';
// @ts-ignore
import loadable from '@loadable/component';

export const routeItems: RouteProps[] = [
  {
    path: [RoutePath.SignUp],
    exact: true,
    component: loadable(() => import('../../page/auth/SignUpPage')),
  },
  {
    path: [RoutePath.SignIn, RoutePath.Root],
    exact: true,
    component: loadable(() => import('../../page/auth/SignInPage')),
  },
  {
    path: [RoutePath.ArticleList],
    exact: true,
    component: loadable(() => import('../../page/article/ArticlePage')),
  },
  {
    path: [RoutePath.ArticleEdit, RoutePath.CreateArticle],
    exact: true,
    component: loadable(() => import('../../page/article/WriteArticlePage')),
  },
  {
    path: [RoutePath.My],
    exact: true,
    component: loadable(() => import('../../page/my/MyPage')),
  },
];
