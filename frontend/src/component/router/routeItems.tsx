import { RouteProps } from 'react-router';
import { RoutePath } from './@types';
// @ts-ignore
import loadable from '@loadable/component';

export const routeItems: RouteProps[] = [
  {
    path: [RoutePath.signIn, RoutePath.root],
    exact: true,
    component: loadable(() => import('../../page/auth/SignInPage')),
  },
];
