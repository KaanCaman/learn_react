import { useAuthContext, useSiteContext } from "../context";
import { AuthState } from "../types";

import Footer from "./Footer";
import Header from "./Header";

/**
 * 1. useContext hookunu kullanarak siteContext ve authContext'i kullanarak
 *   siteContext ve authContext'ten state ve dispatch fonksiyonlarını alır.
 * 2. Eğer authContext'teki isAuthenticated true ise aşağıdaki main alanını gösterir.
 *   Eğer authContext'teki isAuthenticated false ise aşağıdaki main alanını gösterir.
 * 3. Eğer authContext'teki isAuthenticated true ise aşağıdaki main alanında aşağıdaki bilgileri gösterir.
 *  - Ben Kaan useContext hookunu öğreniyorum.
 * - I'm Kaan learning useContext hook.
 * - Theme: light
 * - Language: en
 * 4. Eğer authContext'teki isAuthenticated false ise aşağıdaki main alanında aşağıdaki bilgileri gösterir.
 * - Not authenticated
 * - Giriş Yapılmadı
 * 5. Eğer authContext'teki isAuthenticated false ise aşağıdaki butona tıklandığında authContext'teki isAuthenticated true yapar.
 * 6. Eğer authContext'teki isAuthenticated true ise aşağıdaki butona tıklandığında authContext'teki isAuthenticated false yapar.
 *
 *
 * 1. Using the useContext hook, it takes the state and dispatch functions from siteContext and authContext.
 * 2. If isAuthenticated in authContext is true, it shows the main area below.
 *   If isAuthenticated in authContext is false, it shows the main area below.
 * 3. If isAuthenticated in authContext is true, it shows the following information in the main area below.
 * - I'm Kaan learning useContext hook.
 * - I'm Kaan learning useContext hook.
 * - Theme: light
 * - Language: en
 * 4. If isAuthenticated in authContext is false, it shows the following information in the main area below.
 * - Not authenticated
 * - Giriş Yapılmadı
 * 5. If isAuthenticated in authContext is false, when the button below is clicked, it sets isAuthenticated in authContext to true.
 * 6. If isAuthenticated in authContext is true, when the button below is clicked, it sets isAuthenticated in authContext to false.
 *
 *
 *  */

export default function Body() {
  //
  // siteContext ve authContext'i kullanarak state ve dispatch fonksiyonlarını alır.
  // It takes the state and dispatch functions from siteContext and authContext.
  const siteContext = useSiteContext();
  const authContext = useAuthContext();

  // login fonksiyonu çağrıldığında authContext'teki isAuthenticated true yapar.
  // When the login function is called, it sets isAuthenticated in authContext to true.
  const login = () => {
    const payload: AuthState = {
      isAuthenticated: true,
      user: {
        id: 1,
        name: "Kaan",
      },
    };

    authContext.setAuth(payload);
  };

  // Eğer authContext'teki isAuthenticated true ise aşağıdaki main alanını gösterir.
  // If isAuthenticated in authContext is true, it shows the main area below.

  // Eğer authContext'teki isAuthenticated false ise aşağıdaki main alanını gösterir.
  // If isAuthenticated in authContext is false, it shows the main area below.

  return (
    <div className={`use-context-screen ${siteContext.state.theme} `}>
      <Header />
      {authContext.state.isAuthenticated ? (
        <main className="main">
          <div className="main-text-area toggle-text">
            <p>
              Ben
              <strong> {authContext.state.user?.name} </strong> useContext
              hookunu öğreniyorum.
            </p>
            <p>
              I'm
              <strong> {authContext.state.user?.name}</strong> learning
              useContext hook.
            </p>

            <p>
              <strong>Theme:</strong> {siteContext.state.theme}
            </p>
            <p>
              <strong>Language:</strong> {siteContext.state.language}
            </p>
          </div>
          <br />

          <div>
            <button
              className={`login-button-${siteContext.state.theme}`}
              onClick={() =>
                authContext.setAuth({ isAuthenticated: false, user: null })
              }
            >
              <strong>Logout / Çıkış Yap </strong>
            </button>
          </div>
        </main>
      ) : (
        <main className="main">
          <div className="main-text-area toggle-text">
            <p>
              <strong>Not authenticated</strong> <br />
              <strong>Giriş Yapılmadı </strong>
            </p>
            <p></p>
          </div>
          <br />
          <button
            className={`login-button-${siteContext.state.theme}`}
            onClick={login}
          >
            <strong>Login / Giriş Yap </strong>
          </button>
        </main>
      )}
      <Footer />
    </div>
  );
}
