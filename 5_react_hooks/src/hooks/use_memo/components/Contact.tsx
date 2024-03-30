import { memo, useCallback, useReducer, useRef } from "react";
import reducer from "../resources/contact_reducer";
import { ConState, ConActionTypes } from "../resources/contact_type";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

/**
 *
 * Contact component
 * Contact bileşeni
 *
 * @returns JSX.Element
 *
 * @description
 * Contact component is used to display the contacts and add a new contact.
 * Contact bileşeni kişileri göstermek ve yeni kişi eklemek için kullanılır.
 *
 *  */
const Contact = memo(() => {
  // log the rendering
  // renderi logla

  console.log("use_memo.components.Contact rendered.");

  // define the initial state
  // başlangıç state'ini tanımla
  const initialState: ConState = {
    contactList: [],
    contact: "",
  };

  // define the input reference
  // input referansını tanımla
  const inputRef = useRef<HTMLInputElement>(null);

  // define the submit handler
  // submit handler'ı tanımla
  const onSubmitHandle = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    //
    //  1. Check if the input value is not empty.
    //  2. If it is not empty, dispatch the action to add the contact.
    //  3. Clear the input value.
    //  4. Prevent the default form submission.
    //
    //  1. Input değerinin boş olmadığını kontrol et.
    //  2. Boş değilse, kişiyi eklemek için action'u dispatch et.
    //  3. Input değerini temizle.
    //  4. Formun default gönderimini engelle.
    //
    if (inputRef.current?.value) {
      dispatch({
        type: ConActionTypes.ADD_CONTACT,
        payload: inputRef.current.value,
      });
      inputRef.current.value = "";
    }
    e.preventDefault();
  }, []);

  // use the reducer
  // reducer'ı kullan
  const [state, dispatch] = useReducer(reducer, initialState);

  // return the JSX
  return (
    <>
      <div className="contact-area">
        <ContactForm ref={inputRef} onSubmitHandle={onSubmitHandle} />
        <div className="scrollable-area">
          <ContactList contactList={state.contactList} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
});

export default Contact;
