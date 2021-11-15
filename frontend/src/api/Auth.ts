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

import {
  Error,
  ForgotPasswordCreatePayload,
  LocalCreatePayload,
  NewUsersPermissionsUser,
  ResetPasswordCreatePayload,
  SendEmailConfirmationCreatePayload,
  UsersPermissionsUser,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 식별자와 패스워드로 로그인할 때 사용합니다.
   *
   * @tags UsersPermissions - User
   * @name LocalCreate
   * @request POST:/auth/local
   * @secure
   */
  localCreate = (data: LocalCreatePayload, params: RequestParams = {}) =>
    this.http.request<{ jwt?: string; user?: UsersPermissionsUser }, Error>({
      path: `/auth/local`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: 'json',
      ...params,
    });
  /**
   * @description Register a new user with the default role
   *
   * @tags UsersPermissions - User
   * @name LocalRegisterCreate
   * @request POST:/auth/local/register
   * @secure
   */
  localRegisterCreate = (data: NewUsersPermissionsUser, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUser, Error>({
      path: `/auth/local/register`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Successfull redirection after approving a provider
   *
   * @tags UsersPermissions - User
   * @name CallbackDetail
   * @request GET:/auth/{provider}/callback
   * @secure
   */
  callbackDetail = (provider: string, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/auth/${provider}/callback`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Send the reset password email link
   *
   * @tags UsersPermissions - User
   * @name ForgotPasswordCreate
   * @request POST:/auth/forgot-password
   * @secure
   */
  forgotPasswordCreate = (
    data: ForgotPasswordCreatePayload,
    params: RequestParams = {}
  ) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/auth/forgot-password`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Reset user password with a code (resetToken)
   *
   * @tags UsersPermissions - User
   * @name ResetPasswordCreate
   * @request POST:/auth/reset-password
   * @secure
   */
  resetPasswordCreate = (data: ResetPasswordCreatePayload, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/auth/reset-password`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Validate a user account
   *
   * @tags UsersPermissions - User
   * @name EmailConfirmationList
   * @request GET:/auth/email-confirmation
   * @secure
   */
  emailConfirmationList = (params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/auth/email-confirmation`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Send a confirmation email to user
   *
   * @tags UsersPermissions - User
   * @name SendEmailConfirmationCreate
   * @request POST:/auth/send-email-confirmation
   * @secure
   */
  sendEmailConfirmationCreate = (
    data: SendEmailConfirmationCreatePayload,
    params: RequestParams = {}
  ) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/auth/send-email-confirmation`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
