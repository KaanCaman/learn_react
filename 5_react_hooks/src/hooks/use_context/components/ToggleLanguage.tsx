import { useAuthContext, useSiteContext } from "../context";
import { SiteActionType } from "../types";

/**
 * 1. useContext hookunu kullanarak siteContext ve authContext'i kullanarak
 *   state ve dispatch fonksiyonlarını alır.
 *
 * 2. It takes the state and dispatch functions from siteContext and authContext
 *   using the useContext hook.
 * 3. isAuthenticated durumuna göre dil değiştirme butonunu aktif veya pasif yapar.
 *  It activates or deactivates the language change button according to the isAuthenticated status.
 *
 * 4. isAuthenticated durumuna göre dil değiştirme butonunu aktif veya pasif yapar.
 * It activates or deactivates the language change button according to the isAuthenticated status.
 *
 * 5. isAuthenticated durumuna göre dil değiştirme butonunu aktif veya pasif yapar.
 * It activates or deactivates the language change button according to the isAuthenticated status.
 *
 * 6. isAuthenticated durumuna göre dil değiştirme butonunu aktif veya pasif yapar.
 * It activates or deactivates the language change button according to the isAuthenticated status.
 *
 *
 * @returns
 * ToggleLanguage Component
 * Dil Değiştirme Butonu
 * Toggle Language Button
 */
const ToggleLanguage = () => {
  // siteContext'ten state ve dispatch fonksiyonunu alır.
  // Gets the state and dispatch function from siteContext.
  const { state, dispatch } = useSiteContext();
  const { isAuthenticated } = useAuthContext().state;

  // Dil değiştirme butonuna tıklandığında çalışacak fonksiyon
  // Function to run when the language change button is clicked
  const onClick = () => {
    // Dil değiştirme işlemi
    // Language change process
    dispatch({ type: SiteActionType.TOGGLE_LANGUAGE });
    return;
  };

  // Dil değiştirme butonu
  // Language change button
  return (
    <>
      {/* Toggle Language */}
      <button
        className={
          !isAuthenticated
            ? `toggle-button-${state.theme} disabled-button-${state.theme}`
            : `toggle-button-${state.theme}`
        }
        onClick={onClick}
        disabled={!isAuthenticated}
      >
        Toggle Language
      </button>
    </>
  );
};

export default ToggleLanguage;
