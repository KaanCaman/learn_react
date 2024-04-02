import { createContext, useReducer } from "react";

import reducer from "../../reducer/siteReducer";
import { SiteContextType } from "../../types";

// SiteContextType tipinde bir obje oluşturulur.
// An object of type SiteContextType is created.
const initialData: SiteContextType = {
  state: {
    theme: localStorage.getItem("theme") ?? "light",
    language: localStorage.getItem("language") ?? "tr",
  },
  dispatch: () => {},
};

// createContext hook'u ile bir context oluşturulur.
// A context is created with the createContext hook.
export const Context = createContext<SiteContextType>(initialData);

/**
 *
 * SiteContext Provider
 *
 * @param children
 * @returns
 * Provider Component
 */
const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialData.state);

  const data: SiteContextType = { state, dispatch };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
