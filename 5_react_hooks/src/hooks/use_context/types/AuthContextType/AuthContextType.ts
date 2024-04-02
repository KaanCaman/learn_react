import AuthState from "../AuthStateType/AuthStateType";



/**
 * AuthContextType
 * 
 * AuthContextType tipinde bir obje oluşturulur.
 * An object of type AuthContextType is created.
 * 
 * @type {AuthContextType}
 * @property {AuthState} state
 * @property {React.Dispatch<React.SetStateAction<AuthState>>} setAuth
 *  

*/
export interface AuthContextType {
  state: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}
