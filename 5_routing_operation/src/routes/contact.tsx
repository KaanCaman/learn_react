import { Form } from "react-router-dom";

// Define the contact type
// İletişim tipini tanımlayın
type contact = {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
};

// Define the contact component
// İletişim bileşenini tanımlayın
const Contact = () => {
  const contact: contact = {
    first: "Your",
    last: "Name",
    avatar: "https://www.gravatar.com/avatar/0?d=mp&f=y",
    twitter: "yourhandle",
    notes: "This is a note",
    favorite: true,
  };
  return (
    <>
      <div id="contact">
        <div>
          <img
            key={contact.avatar}
            src={contact.avatar}
            alt={`Avatar of ${contact.first} ${contact.last}`}
          />
        </div>

        <div>
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite {...contact} />
          </h1>

          {contact.twitter && (
            <p>
              <a
                target="_blank"
                href={`https://twitter.com/${contact.twitter}`}
              >
                @{contact.twitter}
              </a>
            </p>
          )}
          {contact.notes && <p>{contact.notes}</p>}

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
const Favorite = (contact: contact) => {
  const favorite: boolean = contact.favorite;
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
