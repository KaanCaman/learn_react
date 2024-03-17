/* eslint-disable react-refresh/only-export-components */
import { Form, useLoaderData } from "react-router-dom";
import { ContactInfo } from "../types/contact_types";
import { getContact } from "../contacts";

export async function loader({ params }): Promise<ContactInfo > {
  const contact = (await getContact(params.id)) ?? {
    id: "1",
    first: "Your",
    last: "Name",
    avatar: "https://www.gravatar.com/avatar/0?d=mp&f=y",
    twitter: "yourhandle",
    notes: "This is a note",
    favorite: true,
    createdAt: Date.now(),
  };
  return  contact;
}

// Define the contact component
// İletişim bileşenini tanımlayın
const Contact = () => {
  const contactData = useLoaderData() as ContactInfo;
  return (
    <>
      <div id="contact">
        <div>
          <img
            key={contactData.avatar}
            src={contactData.avatar}
            alt={
              typeof contactData.first !== "undefined" &&
              typeof contactData.last !== "undefined"
                ? `Avatar of ${contactData.first} ${contactData.last}`
                : ""
            }
          />
        </div>

        <div>
          <h1>
            {typeof contactData.first !== "undefined" &&
            typeof contactData.last !== "undefined" ? (
              <>
                {contactData.first} {contactData.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite {...contactData} />
          </h1>

          {contactData.twitter && (
            <p>
              <a
                target="_blank"
                href={`https://twitter.com/${contactData.twitter}`}
              >
                @{contactData.twitter}
              </a>
            </p>
          )}
          {contactData.notes && <p>{contactData.notes}</p>}

          <div>
            <Form action="edit">
              <button type="submit">Edit</button>
            </Form>
            <Form
              method="post"
              action="destroy"
              onSubmit={(event) => {
                if (!confirm("Please confrim you want o delete this record")) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit">Delete</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

// Define the favorite component
// Favori bileşenini tanımlayın
const Favorite = (contact: ContactInfo) => {
  const favorite: boolean = contact.favorite ?? false;
  return (
    <>
      <Form>
        <button
          name="favorite"
          value={favorite ? "false" : "true"}
          aria-label={
            favorite
              ? `Remove ${contact.first} ${contact.last} from favorites`
              : `Add ${contact.first} ${contact.last} to favorites`
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </Form>
    </>
  );
};

export default Contact;
