import { createContext, useState } from "react";
import { AuthContextType, AuthState } from "../../types";

// AuthContextType tipinde bir obje oluşturulur.
// An object of type AuthContextType is created.
const initalData: AuthContextType = {
  state: {
    isAuthenticated: false,
    user: null,
  },
  setAuth: () => {},
};

// createContext hook'u ile bir context oluşturulur.
// A context is created with the createContext hook.
export const Context = createContext<AuthContextType>(initalData);

/**
 *
 * AuthContext Provider
 *
 * @param children
 * @returns
 * Provider Component
 *
 */

const Provider = ({ children }: { children: React.ReactNode }) => {
  //
  // AuthState tipinde bir state oluşturulur.
  // A state of type AuthState is created.
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  // Provider component'i içerisindeki children'a state ve setAuth fonksiyonu gönderilir.
  const data = {
    state: auth,
    setAuth,
  };

  // Provider component'i döndürülür.
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
