export interface SignInParams {
  identifier: string;
  password: string;
}

export type SignUpParams = Components.Schemas.NewUsersPermissionsUser;
export type User = Components.Schemas.UsersPermissionsUser;
export type TokenResult = Paths.AuthLocal.Post.Responses.$200;
