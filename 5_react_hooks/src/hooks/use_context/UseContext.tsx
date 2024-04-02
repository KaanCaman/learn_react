import "../../styles/context.css";

import { AuthContext, SiteContext } from "./context/";
import Body from "./components/Body";

/**
 *
 * UseContext Component
 *
 * context kavramı : Componentlere props drilling yapmadan state ve dispatch fonksiyonlarını paylaşmamızı sağlar.
 * The context concept: Allows us to share state and dispatch functions between components without props drilling.
 *
 * context kavramını kullanarak state ve dispatch fonksiyonlarını paylaşan bir uygulama.
 * An application that shares state and dispatch functions using the context concept.
 *
 * @description
 * SiteContext ve AuthContext provider'ları kullanılarak Body component'i render edilir.
 * The Body component is rendered using the SiteContext and AuthContext providers.
 *
 *
 *
 * @returns
 * UseContext Component
 */
const UseContext = () => {
  return (
    <>
      <SiteContext>
        <AuthContext>
          <Body />
        </AuthContext>
      </SiteContext>
    </>
  );
};

export default UseContext;
