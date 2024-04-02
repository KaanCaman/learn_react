import { memo } from "react";
import { ConAction } from "../resources/contact_type";
import ContactListItem from "./ContactListItem";

//
// define the type of the props
// contactList: string[] -> the list of contacts to be displayed
// dispatch: React.Dispatch<ConAction> -> the dispatch function to be used for deleting the contact
//
// propsun tipini tanımladık.
// contactList: string[] -> gösterilecek kişilerin listesi
// dispatch: React.Dispatch<ConAction> -> kişiyi silmek için kullanılacak dispatch fonksiyonu
//
type ContactListProps = {
  contactList: string[];
  dispatch: React.Dispatch<ConAction>;
};

/**
 *
 * ContactList component
 * ContactList bileşeni
 *
 *
 * @param props ContactListProps
 * @returns JSX.Element
 *
 * @description
 * ContactList component is used to display the list of contacts.
 * ContactList bileşeni kişilerin listesini göstermek için kullanılır.
 *
 *
 * */

const ContactList = memo((props: ContactListProps) => {
  // get the props
  // propsları al
  const { dispatch, contactList } = props;

  // log the rendering
  // renderi logla
  console.log("use_memo.components.ContactList rendered.", contactList);

  // return the JSX
  return (
    <>
      <ul className="list">
        {contactList.length > 0 ? (
          contactList.map((contact, index) => (
            <ContactListItem
              key={index}
              contact={contact}
              dispatch={dispatch}
            />
          ))
        ) : (
          <>
            <ContactListItem contact="No contact available. Add a contact to get started." />
            <ContactListItem contact="Kişi yok. Başlamak için bir kişi ekleyin." />
          </>
        )}
      </ul>
    </>
  );
});

export default ContactList;
