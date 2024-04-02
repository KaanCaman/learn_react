import React, { forwardRef, memo } from "react";

// define the type of the props
// onSubmitHandle: (e: React.FormEvent<HTMLFormElement>) => void -> the function to be called when the form is submitted
//
// propsun tipini tanımladık.
// onSubmitHandle: (e: React.FormEvent<HTMLFormElement>) => void -> form gönderildiğinde çağrılacak fonksiyon
type ContactFormProps = {
  onSubmitHandle: (e: React.FormEvent<HTMLFormElement>) => void;
};

/**
 *
 * ContactForm component
 * ContactForm bileşeni
 *
 * @param props ContactFormProps
 * @returns JSX.Element
 *
 * @description
 * ContactForm component is used to add a new contact.
 * ContactForm bileşeni yeni bir kişi eklemek için kullanılır.
 *
 */
const ContactForm = memo(
  forwardRef<HTMLInputElement, ContactFormProps>(
    (props: ContactFormProps, ref: React.Ref<HTMLInputElement> | null) => {
      // log the rendering
      // renderi logla
      console.log("use_memo.components.ContactForm rendered.");

      // get the props
      // propsları al
      const { onSubmitHandle } = props;

      // return the JSX
      return (
        <>
          <form className="form" onSubmit={onSubmitHandle}>
            <input
              type="text"
              placeholder="Kişi Ekle / Add contact"
              className="form-input"
              ref={ref}
            />
            <button type="submit" className="form-submit">
              Add / Ekle
            </button>
          </form>
        </>
      );
    }
  )
);

export default ContactForm;
