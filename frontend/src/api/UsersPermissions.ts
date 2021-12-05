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
  NewUsersPermissionsRole,
  RolesListParams,
  SearchDetailParams,
  UsersPermissionsRole,
  UsersPermissionsUser,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class UsersPermissions<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Retrieve a role depending on its id
   *
   * @tags UsersPermissions - Role
   * @name RolesDetail
   * @request GET:/users-permissions/roles/{id}
   * @secure
   */
  rolesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsRole, Error>({
      path: `/users-permissions/roles/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve all role documents
   *
   * @tags UsersPermissions - Role
   * @name RolesList
   * @request GET:/users-permissions/roles
   * @secure
   */
  rolesList = (query: RolesListParams, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsRole[], Error>({
      path: `/users-permissions/roles`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Create a new role
   *
   * @tags UsersPermissions - Role
   * @name RolesCreate
   * @request POST:/users-permissions/roles
   * @secure
   */
  rolesCreate = (data: NewUsersPermissionsRole, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsRole, Error>({
      path: `/users-permissions/roles`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Update a role
   *
   * @tags UsersPermissions - Role
   * @name RolesUpdate
   * @request PUT:/users-permissions/roles/{role}
   * @secure
   */
  rolesUpdate = (
    role: string,
    data: NewUsersPermissionsRole,
    params: RequestParams = {}
  ) =>
    this.http.request<UsersPermissionsRole, Error>({
      path: `/users-permissions/roles/${role}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete a role
   *
   * @tags UsersPermissions - Role
   * @name RolesDelete
   * @request DELETE:/users-permissions/roles/{role}
   * @secure
   */
  rolesDelete = (role: string, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/users-permissions/roles/${role}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Search for users
   *
   * @tags UsersPermissions - User
   * @name SearchDetail
   * @request GET:/users-permissions/search/{id}
   * @secure
   */
  searchDetail = ({ id, ...query }: SearchDetailParams, params: RequestParams = {}) =>
    this.http.request<UsersPermissionsUser[], Error>({
      path: `/users-permissions/search/${id}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
