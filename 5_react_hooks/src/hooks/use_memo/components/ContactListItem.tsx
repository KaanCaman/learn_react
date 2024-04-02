import { memo, useCallback } from "react";
import { ConAction, ConActionTypes } from "../resources/contact_type";

//
// define the type of the props
// contact: string -> the contact to be displayed
// dispatch?: React.Dispatch<ConAction> -> the dispatch function to be used for deleting the contact

// propsun tipini tanımladık.
// contact: string -> gösterilecek kişi
// dispatch?: React.Dispatch<ConAction> -> kişiyi silmek için kullanılacak dispatch fonksiyonu
//
type ContactListItemProps = {
  contact: string;
  dispatch?: React.Dispatch<ConAction>;
};

/**
 *
 * ContactListItem component
 * ContactListItem bileşeni
 *
 * @param props ContactListItemProps
 * @returns JSX.Element
 *
 * @description
 * ContactListItem component is used to display a single contact.
 * ContactListItem bileşeni tek bir kişiyi göstermek için kullanılır.
 *
 *  */
const ContactListItem = memo((props: ContactListItemProps) => {
  // propsun içinden contact ve dispatch'i aldık.
  const { contact, dispatch } = props;

  // log the rendering
  // renderi logla
  console.log("use_memo.components.ContactListItem rendered. -> ", contact);

  // return the JSX
  return (
    <li className="list-item">
      <span className="list-item-text">{contact}</span>
      {dispatch && (
        <button
          className="list-item-delete"
          onClick={
            // delete the contact
            // kişiyi sil

            // useCallback is used to prevent the recreation of the function on each render.
            // useCallback, her renderda fonksiyonun yeniden oluşturulmasını önlemek için kullanılır.
            useCallback(
              () => {
                // dispatch the action
                // aksiyonu dispatch et
                dispatch({
                  type: ConActionTypes.DELETE_CONTACT,
                  payload: contact,
                });
              },

              //
              // dependencies
              // bağımlılıklar
              [dispatch, contact]
            )
          }
        >
          Sil / Delete
        </button>
      )}
    </li>
  );
});

export default ContactListItem;
