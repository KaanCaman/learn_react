import { useContext } from "react";
import { Context } from "./SiteContext";
import { SiteContextType } from "../../types";

/**
 * SiteContext'i döndürür.
 * Returns SiteContext.
 *
 * @returns
 * SiteContext
 */
export default function useSiteContext(): SiteContextType {
  return useContext(Context);
}
