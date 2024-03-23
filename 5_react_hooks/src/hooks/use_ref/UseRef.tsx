import UseRefComponent from "./UseRefComponent";

/**
 * useRef - forwardRef hook kullanımı.
 * useRef - forwardRef hook usage.
 *
 * document.getElementById() ile bir elemana erişmek yerine useRef hook'u kullanılır.
 * Instead of accessing an element with document.getElementById(), the useRef hook is used.
 *
 * useRef hook'u ile bir elemana erişmek için kullanılır.
 * It is used to access an element with the useRef hook.
 *
 * forwardRef ile bir component'e erişmek için kullanılır.
 * It is used to access a component with forwardRef.
 *
 *
 *   <UseRefComponent />
 *
 *
 */

// UseRef componentini oluşturduk.
const UseRef = () => {
  return (
    <>
      <UseRefComponent />
    </>
  );
};

export default UseRef;
