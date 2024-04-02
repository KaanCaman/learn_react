import UseReducerComponent from "./UseReducerComponent";

/**
 * # UseReducer
 *  @returns UseReducer
 * ---
 *
 ** ## Açıklama - Description
 * ---
 ** #### useReducer hook'u ile state yönetimi yapabiliriz.
 ** #### We can manage state with the useReducer hook.
 * ---
 ** ####  Birden fazla useState hooku kullanmak yerine useReducer hook'u kullanarak state yönetimini daha kolay yapabiliriz.
 ** #### Instead of using multiple useState hooks, we can manage the state more easily using the useReducer hook.
 *
 */

const UseReducer = () => {
  return (
    <>
      <h1>UseReducer</h1>
      <div>
        <UseReducerComponent />
      </div>
    </>
  );
};

export default UseReducer;
