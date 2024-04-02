import SiteAction from "../SiteReducerType/SiteAction";
import SiteState from "../SiteReducerType/SiteState";

/**
 *
 * Site Context Type
 *
 * SiteContextType tipinde bir obje oluşturulur.
 * An object of type SiteContextType is created.
 *
 *
 * @type {SiteContextType}
 * @property {SiteState} state
 * @property {React.Dispatch<SiteAction>} dispatch
 *
 *
 *
 */
export type SiteContextType = {
  state: SiteState;
  dispatch: React.Dispatch<SiteAction>;
};
