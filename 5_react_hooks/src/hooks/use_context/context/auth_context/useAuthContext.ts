import { useContext } from "react";
import { Context } from "./AuthContext";
import { AuthContextType } from "../../types";

/**
 * AuthContext'i döndürür.
 * Returns AuthContext.
 *
 * @returns
 * AuthContext
 */
export default function useAuthContext(): AuthContextType {
  return useContext(Context);
}
