import { SiteAction, SiteActionType, SiteState } from "../types";

/**
 *
 * Site Reducer
 *
 * @param state
 * @param action
 * @returns
 * SiteState
 */
export default function reducer(state: SiteState, action: SiteAction) {
  // console.log("%csiteReducer.ts", "font-weight:bold; color: #bada55");

  //
  console.table({ state, action });

  switch (action.type) {
    //
    // Tema değiştirme işlemi
    // Theme change process
    //
    case SiteActionType.TOGGLE_THEME:
      //
      // localStorage'da tema bilgisini günceller.
      // Updates the theme information in localStorage.
      //
      localStorage.setItem("theme", state.theme === "light" ? "dark" : "light");
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    //
    // Dil değiştirme işlemi
    // Language change process
    //
    case SiteActionType.TOGGLE_LANGUAGE:
      localStorage.setItem("language", state.language === "tr" ? "en" : "tr");

      return {
        ...state,
        language: state.language === "tr" ? "en" : "tr",
      };
    default:
      return state;
  }
}
