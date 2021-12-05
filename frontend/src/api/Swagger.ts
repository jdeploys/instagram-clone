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

export class Swagger<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Swagger
   * @name OpenapiJsonList
   * @request GET:/swagger/openapi.json
   * @secure
   */
  openapiJsonList = (params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/swagger/openapi.json`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Swagger
   * @name VOpenapiJsonDetail
   * @request GET:/swagger/v{major}.{minor}.{patch}/openapi.json
   * @secure
   */
  vOpenapiJsonDetail = (
    major: string,
    minor: string,
    patch: string,
    params: RequestParams = {}
  ) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/swagger/v${major}.${minor}.${patch}/openapi.json`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
