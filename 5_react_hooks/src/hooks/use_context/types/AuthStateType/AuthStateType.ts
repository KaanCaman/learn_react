import AuthUser from "./AuthUserType";

/**
 *
 * AuthStateType
 *
 * AuthStateType tipinde bir obje oluşturulur.
 * An object of type AuthStateType is created.
 *
 * @interface AuthState
 * @property {boolean} isAuthenticated
 * @property {AuthUser | null} user
 *
 *
 *  */

export default interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
}
