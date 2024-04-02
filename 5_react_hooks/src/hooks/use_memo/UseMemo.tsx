import Header from "./components/Header";
import Footer from "./components/Footer";
import "../../styles/contact.css";
import Contact from "./components/Contact";
import { useState } from "react";

/**
 *
 * UseMemo component
 * UseMemo bileşeni
 *
 * @returns JSX.Element
 *
 * @description
 * UseMemo component is used to demonstrate the useMemo hook.
 * UseMemo bileşeni useMemo hook'unu göstermek için kullanılır.
 *
 * useMemo is used to memoize the value of a variable.
 * useMemo, bir değişkenin değerini memoize etmek için kullanılır.
 *
 * useMemo is used to prevent the re-calculation of a value on each render.
 * useMemo, bir değerin her renderda tekrar hesaplanmasını önlemek için kullanılır.
 *
 * useMemo is used to prevent the re-rendering of a component on each render.
 * useMemo, bir bileşenin her renderda tekrar renderlanmasını önlemek için kullanılır.
 *
 */
const UseMemo = () => {
  // log the rendering
  // renderi logla
  console.log("use_memo.UseMemo rendered.");

  // define the count state
  // count state'ini tanımla
  const [count, setCount] = useState(0);

  // return the JSX
  return (
    <>
      <div className="rootsc">
        <Header />
        <div className="counter-area">
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        <hr />
        <Contact />
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default UseMemo;
