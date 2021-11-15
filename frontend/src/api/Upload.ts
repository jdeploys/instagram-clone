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

import { Error, UploadCreatePayload } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Upload<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Upload a file
   *
   * @tags Upload - File
   * @name UploadCreate
   * @request POST:/upload/
   * @secure
   */
  uploadCreate = (data: UploadCreatePayload, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/upload/`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve the total number of uploaded files
   *
   * @tags Upload - File
   * @name FilesCountList
   * @request GET:/upload/files/count
   * @secure
   */
  filesCountList = (params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/upload/files/count`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve all file documents
   *
   * @tags Upload - File
   * @name FilesList
   * @request GET:/upload/files
   * @secure
   */
  filesList = (params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/upload/files`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Retrieve a single file depending on its id
   *
   * @tags Upload - File
   * @name FilesDetail
   * @request GET:/upload/files/{id}
   * @secure
   */
  filesDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/upload/files/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Delete an uploaded file
   *
   * @tags Upload - File
   * @name FilesDelete
   * @request DELETE:/upload/files/{id}
   * @secure
   */
  filesDelete = (id: string, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/upload/files/${id}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Search for an uploaded file
   *
   * @tags Upload - File
   * @name SearchDetail
   * @request GET:/upload/search/{id}
   * @secure
   */
  searchDetail = (id: string, params: RequestParams = {}) =>
    this.http.request<{ foo?: string }, Error>({
      path: `/upload/search/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
}
