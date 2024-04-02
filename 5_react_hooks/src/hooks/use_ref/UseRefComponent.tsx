import { useRef, forwardRef } from "react";

// LabelInput propsları için LabelInputProps tipi tanımladık.
// We defined the LabelInputProps type for the LabelInput props.
type LabelInputProps = {
  label: string;
};

/**
 * LabelInput componenti oluşturduk.
 * We created the LabelInput component.
 *
 * forwardRef ile LabelInput componentine ref ekledik.
 * We added ref to the LabelInput component with forwardRef.
 *
 * @param props LabelInputProps
 * @param ref React.Ref<HTMLInputElement> | null
 * @returns JSX.Element
 *
 * @example
 * <LabelInput label="Labeled forwardRef :" ref={labelInputRef} />

 */
const LabelInput = forwardRef<HTMLInputElement, LabelInputProps>(
  (props: LabelInputProps, ref: React.Ref<HTMLInputElement> | null) => {
    return (
      <div>
        <label>{props.label}</label>
        <input type="text" ref={ref} />
      </div>
    );
  }
);


/**
 * UseRefComponent componenti oluşturduk.
 * We created the UseRefComponent component.
 *
 * 
 * @returns JSX.Element
 * 
 * @example
 * <UseRefComponent />
 * 
 * 
*/
const UseRefComponent = () => {
  // html <input> eleamanına erişmek için useRef kullanıyoruz.
  // We use useRef to access the html <input> element.
  const ref = useRef<HTMLInputElement>(null);

  // LabelInput componentine erişmek için useRef kullanıyoruz.
  // We use useRef to access the LabelInput component.
  const labelInputRef = useRef<HTMLInputElement>(null);

  //
  // input elamanına odaklanmak için eklediğimiz <button> elamının onClick eventi.
  // The onClick event of the <button> element we added to focus on the input element.
  //
  const clickFocusButton = () => {
    //
    //  ref.current?.focus() ile useRef ile oluşturduğumuz input elemanına odaklanıyoruz.
    //  We focus on the input element we created with useRef with ref.current?.focus().
    //
    ref.current?.focus();
  };

  //
  // LabelInput componentine odaklanmak için eklediğimiz <button> elamının onClick eventi.
  // The onClick event of the <button> element we added to focus on the LabelInput component.
  //
  const clickLabelInputButtonFocus = () => {
    //
    //  labelInputRef.current?.focus() ile useRef ile oluşturduğumuz LabelInput componentine odaklanıyoruz.
    //  We focus on the LabelInput component we created with useRef with labelInputRef.current?.focus().
    //
    labelInputRef.current?.focus();
  };

  // UseRefComponent componentini return ediyoruz.
  return (
    <>
      <h1>useRef</h1>

      <div>
        <input type="text" ref={ref} />
        <button onClick={clickFocusButton}>
          Focus input / input'a odaklan
        </button>
      </div>

      <p>This function component forwardRef</p>
      <div>
        <LabelInput label="Labeled forwardRef :" ref={labelInputRef} />
        <button onClick={clickLabelInputButtonFocus}>
          Focus input / input'a odaklan
        </button>
      </div>
    </>
  );
};

export default UseRefComponent;
