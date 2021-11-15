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

import { Error, NewReply, RepliesListParams, Reply } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Replies<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Reply
   * @name RepliesList
   * @request GET:/replies
   * @secure
   */
  repliesList = (query: RepliesListParams, params: RequestParams = {}) =>
    this.http.request<Reply[], Error>({
      path: `/replies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Create a new record
   *
   * @tags Reply
   * @name RepliesCreate
   * @request POST:/replies
   * @secure
   */
  repliesCreate = (data: NewReply, params: RequestParams = {}) =>
    this.http.request<Reply, Error>({
      path: `/replies`,
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
   * @tags Reply
   * @name CountList
   * @request GET:/replies/count
   * @secure
   */
  countList = (params: RequestParams = {}) =>
    this.http.request<{ count?: number }, Error>({
      path: `/replies/count`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Reply
   * @name RepliesDetail
   * @request GET:/replies/{id}
   * @secure
   */
  repliesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<Reply, Error>({
      path: `/replies/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Update a record
   *
   * @tags Reply
   * @name RepliesUpdate
   * @request PUT:/replies/{id}
   * @secure
   */
  repliesUpdate = (id: string, data: NewReply, params: RequestParams = {}) =>
    this.http.request<Reply, Error>({
      path: `/replies/${id}`,
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
   * @tags Reply
   * @name RepliesDelete
   * @request DELETE:/replies/{id}
   * @secure
   */
  repliesDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<number, Error>({
      path: `/replies/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
}
