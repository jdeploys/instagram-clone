import axios from 'axios';
import { Article, GetArticleParams } from '@/api/@types/article';
import { CountResponse } from '@/api/@types/base';

export const getArticleCount = () => {
  return axios.get<CountResponse>('/articles/count');
};
export const getArticles = (params: GetArticleParams) => {
  return axios.get<Article[]>('/articles');
};
export const createArticle = () => {};
export const updateArticle = () => {};
export const getArticle = () => {};
