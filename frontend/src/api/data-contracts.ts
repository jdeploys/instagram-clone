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

export interface Article {
  id: string;
  content?: string;
  files?: {
    id: string;
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: object;
    hash: string;
    ext?: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: object;
    related?: string;
    created_by?: string;
    updated_by?: string;
  }[];
  replies?: {
    id: string;
    article?: string;
    content?: string;
    user?: string;
    published_at?: string;
    created_by?: string;
    updated_by?: string;
  }[];
  user?: {
    id: string;
    username: string;
    email: string;
    provider?: string;
    password?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: string;
    like?: string;
    created_by?: string;
    updated_by?: string;
  };
  likes?: {
    id: string;
    article?: string;
    user?: string;
    published_at?: string;
    created_by?: string;
    updated_by?: string;
  }[];

  /** @format date-time */
  published_at?: string;
}

export interface NewArticle {
  content?: string;
  replies?: string[];
  user?: string;
  likes?: string[];

  /** @format date-time */
  published_at?: string;
  created_by?: string;
  updated_by?: string;
}

export interface Like {
  id: string;
  article?: {
    id: string;
    content?: string;
    files?: string[];
    replies?: string[];
    user?: string;
    likes?: string[];
    published_at?: string;
    created_by?: string;
    updated_by?: string;
  };
  user?: {
    id: string;
    username: string;
    email: string;
    provider?: string;
    password?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: string;
    like?: string;
    created_by?: string;
    updated_by?: string;
  };

  /** @format date-time */
  published_at?: string;
}

export interface NewLike {
  article?: string;
  user?: string;

  /** @format date-time */
  published_at?: string;
  created_by?: string;
  updated_by?: string;
}

export interface Reply {
  id: string;
  article?: {
    id: string;
    content?: string;
    files?: string[];
    replies?: string[];
    user?: string;
    likes?: string[];
    published_at?: string;
    created_by?: string;
    updated_by?: string;
  };
  content?: string;
  user?: {
    id: string;
    username: string;
    email: string;
    provider?: string;
    password?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: string;
    like?: string;
    created_by?: string;
    updated_by?: string;
  };

  /** @format date-time */
  published_at?: string;
}

export interface NewReply {
  article?: string;
  content?: string;
  user?: string;

  /** @format date-time */
  published_at?: string;
  created_by?: string;
  updated_by?: string;
}

export interface UsersPermissionsRole {
  id: string;
  name: string;
  description?: string;
  type?: string;
  permissions?: {
    id: string;
    type: string;
    controller: string;
    action: string;
    enabled: boolean;
    policy?: string;
    role?: string;
    created_by?: string;
    updated_by?: string;
  }[];
  users?: {
    id: string;
    username: string;
    email: string;
    provider?: string;
    password?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: string;
    like?: string;
    created_by?: string;
    updated_by?: string;
  }[];
}

export interface NewUsersPermissionsRole {
  name: string;
  description?: string;
  type?: string;
  permissions?: string[];
  users?: string[];
  created_by?: string;
  updated_by?: string;
}

export interface UsersPermissionsUser {
  id: string;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: {
    id: string;
    name: string;
    description?: string;
    type?: string;
    permissions?: string[];
    users?: string[];
    created_by?: string;
    updated_by?: string;
  };
  like?: {
    id: string;
    article?: string;
    user?: string;
    published_at?: string;
    created_by?: string;
    updated_by?: string;
  };
}

export interface NewUsersPermissionsUser {
  username: string;
  email: string;
  provider?: string;

  /** @format password */
  password?: string;
  resetPasswordToken?: string;
  confirmationToken?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: string;
  like?: string;
  created_by?: string;
  updated_by?: string;
}

export interface Error {
  /** @format int32 */
  code: number;
  message: string;
}

export interface ArticlesListParams {
  /** Maximum number of results possible */
  _limit?: number;

  /** Sort according to a specific field. */
  _sort?: string;

  /** Skip a specific number of entries (especially useful for pagination) */
  _start?: number;

  /** Get entries that matches exactly your input */
  '='?: string;

  /** Get records that are not equals to something */
  _ne?: string;

  /** Get record that are lower than a value */
  _lt?: string;

  /** Get records that are lower than or equal to a value */
  _lte?: string;

  /** Get records that are greater than a value */
  _gt?: string;

  /** Get records that are greater than  or equal a value */
  _gte?: string;

  /** Get records that contains a value */
  _contains?: string;

  /** Get records that contains (case sensitive) a value */
  _containss?: string;

  /** Get records that matches any value in the array of values */
  _in?: string[];

  /** Get records that doesn't match any value in the array of values */
  _nin?: string[];
}

export interface LikesListParams {
  /** Maximum number of results possible */
  _limit?: number;

  /** Sort according to a specific field. */
  _sort?: string;

  /** Skip a specific number of entries (especially useful for pagination) */
  _start?: number;

  /** Get entries that matches exactly your input */
  '='?: string;

  /** Get records that are not equals to something */
  _ne?: string;

  /** Get record that are lower than a value */
  _lt?: string;

  /** Get records that are lower than or equal to a value */
  _lte?: string;

  /** Get records that are greater than a value */
  _gt?: string;

  /** Get records that are greater than  or equal a value */
  _gte?: string;

  /** Get records that contains a value */
  _contains?: string;

  /** Get records that contains (case sensitive) a value */
  _containss?: string;

  /** Get records that matches any value in the array of values */
  _in?: string[];

  /** Get records that doesn't match any value in the array of values */
  _nin?: string[];
}

export interface RepliesListParams {
  /** Maximum number of results possible */
  _limit?: number;

  /** Sort according to a specific field. */
  _sort?: string;

  /** Skip a specific number of entries (especially useful for pagination) */
  _start?: number;

  /** Get entries that matches exactly your input */
  '='?: string;

  /** Get records that are not equals to something */
  _ne?: string;

  /** Get record that are lower than a value */
  _lt?: string;

  /** Get records that are lower than or equal to a value */
  _lte?: string;

  /** Get records that are greater than a value */
  _gt?: string;

  /** Get records that are greater than  or equal a value */
  _gte?: string;

  /** Get records that contains a value */
  _contains?: string;

  /** Get records that contains (case sensitive) a value */
  _containss?: string;

  /** Get records that matches any value in the array of values */
  _in?: string[];

  /** Get records that doesn't match any value in the array of values */
  _nin?: string[];
}

export interface EmailCreatePayload {
  foo?: string;
}

export interface TestCreatePayload {
  foo?: string;
}

export interface UploadCreatePayload {
  /** The file(s) to upload. The value(s) can be a Buffer or Stream */
  files?: File;

  /** (optional): The folder where the file(s) will be uploaded to (only supported on strapi-upload-aws-s3 now). */
  path?: string;

  /** (optional): The ID of the entry which the file(s) will be linked to. */
  refId?: string;

  /** (optional): The name of the model which the file(s) will be linked to. */
  ref?: string;

  /** (optional): The name of the plugin where the model is located. */
  source?: string;

  /** (optional): The field of the entry which the file(s) will be precisely linked to. */
  field?: string;
}

export interface RolesListParams {
  /** Maximum number of results possible */
  _limit?: number;

  /** Sort according to a specific field. */
  _sort?: string;

  /** Skip a specific number of entries (especially useful for pagination) */
  _start?: number;

  /** Get entries that matches exactly your input */
  '='?: string;

  /** Get records that are not equals to something */
  _ne?: string;

  /** Get record that are lower than a value */
  _lt?: string;

  /** Get records that are lower than or equal to a value */
  _lte?: string;

  /** Get records that are greater than a value */
  _gt?: string;

  /** Get records that are greater than  or equal a value */
  _gte?: string;

  /** Get records that contains a value */
  _contains?: string;

  /** Get records that contains (case sensitive) a value */
  _containss?: string;

  /** Get records that matches any value in the array of values */
  _in?: string[];

  /** Get records that doesn't match any value in the array of values */
  _nin?: string[];
}

export interface SearchDetailParams {
  /** Maximum number of results possible */
  _limit?: number;

  /** Sort according to a specific field. */
  _sort?: string;

  /** Skip a specific number of entries (especially useful for pagination) */
  _start?: number;

  /** Get entries that matches exactly your input */
  '='?: string;

  /** Get records that are not equals to something */
  _ne?: string;

  /** Get record that are lower than a value */
  _lt?: string;

  /** Get records that are lower than or equal to a value */
  _lte?: string;

  /** Get records that are greater than a value */
  _gt?: string;

  /** Get records that are greater than  or equal a value */
  _gte?: string;

  /** Get records that contains a value */
  _contains?: string;

  /** Get records that contains (case sensitive) a value */
  _containss?: string;

  /** Get records that matches any value in the array of values */
  _in?: string[];

  /** Get records that doesn't match any value in the array of values */
  _nin?: string[];
  id: string;
}

export interface LocalCreatePayload {
  identifier?: string;
  password?: string;
}

export interface ForgotPasswordCreatePayload {
  foo?: string;
}

export interface ResetPasswordCreatePayload {
  foo?: string;
}

export interface SendEmailConfirmationCreatePayload {
  foo?: string;
}

export interface UsersListParams {
  /** Maximum number of results possible */
  _limit?: number;

  /** Sort according to a specific field. */
  _sort?: string;

  /** Skip a specific number of entries (especially useful for pagination) */
  _start?: number;

  /** Get entries that matches exactly your input */
  '='?: string;

  /** Get records that are not equals to something */
  _ne?: string;

  /** Get record that are lower than a value */
  _lt?: string;

  /** Get records that are lower than or equal to a value */
  _lte?: string;

  /** Get records that are greater than a value */
  _gt?: string;

  /** Get records that are greater than  or equal a value */
  _gte?: string;

  /** Get records that contains a value */
  _contains?: string;

  /** Get records that contains (case sensitive) a value */
  _containss?: string;

  /** Get records that matches any value in the array of values */
  _in?: string[];

  /** Get records that doesn't match any value in the array of values */
  _nin?: string[];
}
