import UseEffectComponent from "./UseEffectComponent";
import { useState } from "react";

// useEffect hookunu kullanarak componentin mount, update ve unmount durumlarında çalışmasını sağlayabiliriz.
// We can make the component work in mount, update, and unmount states using the useEffect hook.

// kullanabileceğimiz örnekler : API isteği, event listener ekleme, document.title değiştirme
// Examples we can use: API request, adding event listeners, changing document.title
const UseEffect = () => {
  // visible state'i tanımlanır
  // visible state is defined
  const [visible, setVisible] = useState<boolean>(true);

  // visibleClick fonksiyonu tanımlanır
  // visibleClick function is defined
  const visibleClick = () => {
    setVisible(!visible);
  };

  // visible durumuna göre UseEffectComponent componenti gösterilir
  // UseEffectComponent component is displayed according to the visible state
  return (
    <>
      <button onClick={visibleClick}>
        <h3>{visible ? "Hide/Gizle" : "Show/Göster"}</h3>
      </button>
      {visible && <UseEffectComponent />}
    </>
  );
};

export default UseEffect;
