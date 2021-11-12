// 사이트 내 주소 들
export enum RoutePath {
  root = '/',
  signIn = '/auth/sign-in',
  signUp = '/auth/sign-up',
  articleList = '/article',
  createArticle = '/article/create',
  articleEdit = '/article/edit/:id',
  articleDetail = '/article/:id',
}
