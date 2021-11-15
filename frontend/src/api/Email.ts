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

import { EmailCreatePayload, Error, TestCreatePayload } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Email<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Send an email
   *
   * @tags Email - Email
   * @name EmailCreate
   * @request POST:/email/
   * @secure
   */
  emailCreate = (data: EmailCreatePayload, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/email/`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Send an test email
   *
   * @tags Email - Email
   * @name TestCreate
   * @request POST:/email/test
   * @secure
   */
  testCreate = (data: TestCreatePayload, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/email/test`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Get the email settings
   *
   * @tags Email - Email
   * @name SettingsList
   * @request GET:/email/settings
   * @secure
   */
  settingsList = (params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/email/settings`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
