/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Article, ArticlesListParams, Error, NewArticle } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Articles<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Article
   * @name ArticlesList
   * @request GET:/articles
   * @secure
   */
  articlesList = (query: ArticlesListParams, params: RequestParams = {}) =>
    this.http.request<Article[], Error>({
      path: `/articles`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Create a new record
   *
   * @tags Article
   * @name ArticlesCreate
   * @request POST:/articles
   * @secure
   */
  articlesCreate = (data: NewArticle, params: RequestParams = {}) =>
    this.http.request<Article, Error>({
      path: `/articles`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Article
   * @name CountList
   * @request GET:/articles/count
   * @secure
   */
  countList = (params: RequestParams = {}) =>
    this.http.request<{ count?: number }, Error>({
      path: `/articles/count`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Article
   * @name ArticlesDetail
   * @request GET:/articles/{id}
   * @secure
   */
  articlesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<Article, Error>({
      path: `/articles/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Update a record
   *
   * @tags Article
   * @name ArticlesUpdate
   * @request PUT:/articles/{id}
   * @secure
   */
  articlesUpdate = (id: string, data: NewArticle, params: RequestParams = {}) =>
    this.http.request<Article, Error>({
      path: `/articles/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete a record
   *
   * @tags Article
   * @name ArticlesDelete
   * @request DELETE:/articles/{id}
   * @secure
   */
  articlesDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<number, Error>({
      path: `/articles/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
}
