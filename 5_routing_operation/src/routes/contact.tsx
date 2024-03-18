/* eslint-disable react-refresh/only-export-components */
import { Form, useFetcher, useLoaderData } from "react-router-dom";
import { ContactInfo } from "../types/contact_types";
import { getContact, updateContact } from "../contacts";

export async function loader({ params }): Promise<ContactInfo> {
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
  return contact;
}
export async function action({ request, params }) {
  const formData = await request.formData();
  console.log(
    params,
    formData.get("favorite") === "true",
    formData,
    "action fonksiyonu içindeki console.log"
  );

  return updateContact(params.id, {
    favorite: formData.get("favorite") === "true",
  });
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
            )}
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
  const fetcher = useFetcher();
  const { first, last, favorite } = contact;

  let fav: boolean = favorite;

  if (fetcher.formData) {
    fav = fetcher.formData.get("favorite") === "true";
  }

  return (
    <>
      <fetcher.Form method="post">
        <button
          name="favorite"
          value={fav ? "false" : "true"}
          aria-label={
            favorite
              ? `Remove ${first} ${last} from favorites`
              : `Add ${first} ${last} to favorites`
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </fetcher.Form>
    </>
  );
};

export default Contact;
