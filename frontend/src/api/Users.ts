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
  NewUsersPermissionsUser,
  UsersListParams,
  UsersPermissionsUser,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Users<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieve all user documents
   *
   * @tags UsersPermissions - User
   * @name UsersList
   * @request GET:/users
   * @secure
   */
  usersList = (query: UsersListParams, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUser[], Error>({
      path: `/users`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve the logged in user information
   *
   * @tags UsersPermissions - User
   * @name GetUsers
   * @request GET:/users/me
   * @secure
   */
  getUsers = (params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUser, Error>({
      path: `/users/me`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve a single user depending on his id
   *
   * @tags UsersPermissions - User
   * @name UsersDetail
   * @request GET:/users/{id}
   * @secure
   */
  usersDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUser, Error>({
      path: `/users/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Update an existing user
   *
   * @tags UsersPermissions - User
   * @name UsersUpdate
   * @request PUT:/users/{id}
   * @secure
   */
  usersUpdate = (id: string, data: NewUsersPermissionsUser, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUser, Error>({
      path: `/users/${id}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete an existing user
   *
   * @tags UsersPermissions - User
   * @name UsersDelete
   * @request DELETE:/users/{id}
   * @secure
   */
  usersDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/users/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
}
