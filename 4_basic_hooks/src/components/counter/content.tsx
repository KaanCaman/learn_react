import { useState } from "react";

const Content = () => {
  // `useState` hook'u ile state yönetimi sağlanır.
  const [state, setState] = useState(0);

  // `increment` fonksiyonu ile state arttırılır.
  const increment = () => {
    setState(state + 1);
  };

  // `decrement` fonksiyonu ile state azaltılır.
  const decrement = () => {
    if (state == 0) return;
    setState(state - 1);
  };

  // `reset` fonksiyonu ile state sıfırlanır.
  const reset = () => {
    setState(0);
  };

  // sadece sayılar için geçerli olan regex pattern
  const onlyNumbersPattern: RegExp = /^[0-9]+$/;

  // input alanına girilen değerlerin sadece sayılar olmasını sağlar
  const onInputChange = (e: string) => {
    //   eğer sadece sayılar varsa state'i güncelle
    if (onlyNumbersPattern.test(e)) {
      setState(parseInt(e));
    }
  };

  return (
    <div className="content">
      <div className="counter">
        <h3>Counter - Sayaç</h3>
        <div className="counter-area">
          <input
            type="text"
            value={state}
            pattern={onlyNumbersPattern.source}
            className="counter-value"
            onInput={(e) => onInputChange(e.currentTarget.value)}
          />
        </div>

        <div className="counter-buttons">
          <button className="counter-decrement" onClick={() => decrement()}>
            <i className="fi fi-bs-minus"></i>
          </button>
          <button className="counter-increment" onClick={() => increment()}>
            <i className="fi fi-br-plus"></i>
          </button>
          <button className="counter-reset" onClick={() => reset()}>
            <i className="fi fi-br-refresh"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
