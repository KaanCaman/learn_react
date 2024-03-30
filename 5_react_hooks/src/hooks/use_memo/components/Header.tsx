import { memo } from "react";

/**
 *
 * Header component
 * Header bileşeni
 *
 * @returns JSX.Element
 *
 * @description
 * Header component is used to display the header of the application.
 * Header bileşeni uygulamanın header'ını göstermek için kullanılır.
 *  */

const Header = memo(() => {
  // log the rendering
  // renderi logla
  console.log("use_memo.components.Header rendered.");

  // return the JSX
  return (
    <>
      <header className="header">
        <h1>Contacts - Kişiler</h1>
        <h2>useMemo</h2>
      </header>
    </>
  );
});

export default Header;
