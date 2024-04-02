import { SiteActionType } from "./SiteActionType";
import SiteState from "./SiteState";

/**
 *
 * Site Action
 *
 * SiteAction tipinde bir obje oluşturulur.
 * An object of type SiteAction is created.
 *
 * @interface {SiteAction}
 * @property {SiteActionType} type
 * @property {SiteState} payload
 *
 *
 */
export default interface SiteAction {
  type: SiteActionType;
  payload?: SiteState;
}
