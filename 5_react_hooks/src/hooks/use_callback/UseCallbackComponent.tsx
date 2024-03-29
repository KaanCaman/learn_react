import { useCallback, useRef, useState } from "react";

/**
 * * Props for the NameComponent.
 * * NameComponent için Props tipi.
 */
type Props = {
  name: string;
};

/**
 * * Component that displays a name and a button.
 * * Bir ad ve button görüntüleyen Component.
 *
 * @param props - The component props.
 * @returns The rendered NameComponent.
 */
const NameComponent = (props: Props) => {
  const { name } = props;
  console.log(`rendered By : ${name}`);

  /**
   * * Click event handler for the button.
   * * Button için tıklama olayı.
   */
  const handleClick = useCallback(() => {
    console.log(`Clicked by ${name}!`);
  }, [name]);

  return (
    <div style={cbStyle.namez as React.CSSProperties}>
      <p>Hello, {name}!</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

/**
 * * Parent component that renders the NameComponent and a form.
 * * NameComponent'i ve bir formu oluşturan üst Component.
 *
 *
 * @returns The rendered UseCallbackComponent.
 */
const UseCallbackComponent = () => {
  console.log("rendered Parent component ");

  const [name, setName] = useState("def");

  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  /**
   * * Form submit event handler.
   * * Formun gönderme olayı.
   * @param event - The form event.
   */
  const submitHandle = (event: React.FormEvent) => {
    // Prevented the default event of the form.
    // Formun default event'ini engelledik.
    event.preventDefault();

    // If our reference is not empty, we update the name.
    // Eğer refaransımız boş değilse ismi güncelliyoruz.
    if (
      inputRef !== null &&
      inputRef.current !== null &&
      inputRef.current.value !== ""
    ) {
      setName(inputRef.current.value);
    }
  };

  return (
    <>
      <div>
        <form
          style={cbStyle.namez as React.CSSProperties}
          onSubmit={submitHandle}
        >
          <input type="text" placeholder="name / isim" ref={inputRef} />
          <button type="submit">Change / Degistir ! </button>
        </form>
      </div>
      <div>
        <NameComponent name={name} />
      </div>
    </>
  );
};

/**
 * CSS styles for the components.
 */
const cbStyle = {
  namez: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    margin: "20px",
  },
};

export default UseCallbackComponent;
