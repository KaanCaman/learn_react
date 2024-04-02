import { memo } from "react";

/**
 *
 * Footer component
 * Footer bileşeni
 *
 * @returns JSX.Element
 *
 * @description
 * Footer component is used to display the footer of the application.
 * Footer bileşeni uygulamanın footer'ını göstermek için kullanılır.
 * */
const Footer = memo(() => {
  // log the rendering
  console.log("use_memo.components.Footer rendered.");

  // return the JSX
  return (
    <>
      <footer>
        Bu uygulamada kullanılan hooklar aşşağgaki gibidir.
        <br />
        The hooks used in this application are as follows.
        <ul>
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useMemo</li>
          <li>useCallback</li>
        </ul>
      </footer>
    </>
  );
});

export default Footer;
