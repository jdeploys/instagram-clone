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

import { Error, Like, LikesListParams, NewLike } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Likes<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Like
   * @name LikesList
   * @request GET:/likes
   * @secure
   */
  likesList = (query: LikesListParams, params: RequestParams = {}) =>
    this.http.request<Like[], Error>({
      path: `/likes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Create a new record
   *
   * @tags Like
   * @name LikesCreate
   * @request POST:/likes
   * @secure
   */
  likesCreate = (data: NewLike, params: RequestParams = {}) =>
    this.http.request<Like, Error>({
      path: `/likes`,
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
   * @tags Like
   * @name CountList
   * @request GET:/likes/count
   * @secure
   */
  countList = (params: RequestParams = {}) =>
    this.http.request<{ count?: number }, Error>({
      path: `/likes/count`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Like
   * @name LikesDetail
   * @request GET:/likes/{id}
   * @secure
   */
  likesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<Like, Error>({
      path: `/likes/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Update a record
   *
   * @tags Like
   * @name LikesUpdate
   * @request PUT:/likes/{id}
   * @secure
   */
  likesUpdate = (id: string, data: NewLike, params: RequestParams = {}) =>
    this.http.request<Like, Error>({
      path: `/likes/${id}`,
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
   * @tags Like
   * @name LikesDelete
   * @request DELETE:/likes/{id}
   * @secure
   */
  likesDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<number, Error>({
      path: `/likes/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
}
