import "../../styles/context.css";

import Header from "./components/Header";

import Footer from "./components/Footer";
const UseContext = () => {
  return (
    <>
      <div className={`use-context-screen`}>
        <Header />

        <main className="main">
          <h3>Main</h3>
          <div className="main-text-area">
            <p>
              Ben <strong>KAAN</strong> react hooks ile ilgili örnekler yapmaya
              devam ediyorum. Bu örneğimde useContext hook'unu kullanarak dil ve
              tema değişikliği yapabiliyoruz.
            </p>
            <p>
              I'm <strong>KAAN</strong> continuing to make examples about react
              hooks. In this example, we can change language and theme using
              useContext hook.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UseContext;
