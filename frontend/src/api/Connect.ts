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

import { Error } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Connect<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Connect a provider
   *
   * @tags UsersPermissions - User
   * @name GetConnect
   * @request GET:/connect/*
   * @secure
   */
  getConnect = (params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/connect/*`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
