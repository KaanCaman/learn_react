import { useAuthContext, useSiteContext } from "../context";
import { SiteActionType } from "../types";

/**
 *
 *
 * 1. useContext hookunu kullanarak siteContext ve authContext'i kullanarak
 *   state ve dispatch fonksiyonlarını alır.
 *   It takes the state and dispatch functions from siteContext and authContext
 *  using the useContext hook.
 *
 * 2. isAuthenticated durumuna göre tema değiştirme butonunu aktif veya pasif yapar.
 * It activates or deactivates the theme change button according to the isAuthenticated status.
 *
 * 3. isAuthenticated durumuna göre tema değiştirme butonunu aktif veya pasif yapar.
 * It activates or deactivates the theme change button according to the isAuthenticated status.
 *
 * 4. isAuthenticated durumuna göre tema değiştirme butonunu aktif veya pasif yapar.
 * It activates or deactivates the theme change button according to the isAuthenticated status.
 *
 * 5. isAuthenticated durumuna göre tema değiştirme butonunu aktif veya pasif yapar.
 * It activates or deactivates the theme change button according to the isAuthenticated status.
 *
 *
 * Tema Değiştirme Butonu
 * Toggle Theme Button
 *
 * @returns
 * ToggleTheme Component
 * Tema Değiştirme Butonu
 *
 *
 */
const ToggleTheme = () => {
  // siteContext'ten state ve dispatch fonksiyonunu alır.
  // Gets the state and dispatch function from siteContext.

  const { state, dispatch } = useSiteContext();
  const { isAuthenticated } = useAuthContext().state;

  // Tema değiştirme butonuna tıklandığında çalışacak fonksiyon
  // Function to run when the theme change button is clicked
  const onClick = () => {
    // Tema değiştirme işlemi
    dispatch({ type: SiteActionType.TOGGLE_THEME });
    return;
  };

  // Tema değiştirme butonu
  // Theme change button

  return (
    <>
      <button
        onClick={onClick}
        className={
          !isAuthenticated
            ? `toggle-button-${state.theme} disabled-button-${state.theme}`
            : `toggle-button-${state.theme}`
        }
        disabled={!isAuthenticated}
      >
        Toggle Theme
      </button>
    </>
  );
};

export default ToggleTheme;
