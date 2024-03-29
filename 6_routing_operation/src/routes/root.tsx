/* eslint-disable react-refresh/only-export-components */
// https://reactrouter.com/en/main/start/tutorial#the-root-route

import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { ContactInfo } from "../types/contact_types";
import { useEffect, useState } from "react";

//* The `action` function is used to perform side-effects, such as data fetching, and navigation.
//* Action fonksiyonu eğer yeni bir kişi oluşturulduysa, kişinin düzenleme sayfasına yönlendirme yapar.

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

//* The `loader` function is used to fetch data for the route.
//* Loader fonksiyonu, rota için veri almak için kullanılır.
export async function loader({
  request,
}): Promise<{ contacts: ContactInfo[]; q: string | null }> {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q ?? "");
  return { contacts, q };
}

//* The Root Route
//* Kök Rotası
export default function Root() {
  const { contacts, q } = useLoaderData() as {
    contacts: ContactInfo[];
    q: string | null;
  };
  const navigation = useNavigation();

  // https://reactrouter.com/en/main/start/tutorial#adding-search-spinner
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  // https://reactrouter.com/en/main/start/tutorial#submitting-forms-onchange
  const submit = useSubmit();
  useEffect(() => {
    document.getElementById("q")!.value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              // https://reactrouter.com/en/main/start/tutorial#adding-search-spinner
              className={searching ? "loading" : ""}
              type="search"
              name="q"
              value={q ?? ""}
              onChange={(e) => {
                const istFirstSearch = q === null;
                submit(e.currentTarget.form, {
                  // https://reactrouter.com/en/main/start/tutorial#managing-the-history-stack
                  replace: !istFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {/*
                * The <Link> to the contact pages.
                * İletişim sayfalarına Link.
                * 
                * The `to` prop is used to specify the target location.
                * `to` özelliği hedef konumu belirtmek için kullanılır.
                * 
                * The `to` prop can be a string or an object.
                * `to` özelliği bir dize veya bir nesne olabilir.
                * 
                * If `to` is a string, it is used as the `pathname` of the target location.
                * `to` bir dize ise, hedef konumun `pathname` olarak kullanılır.
                * 
                * If `to` is an object, it can have the following properties:
                * `to` bir nesne ise, aşağıdaki özelliklere sahip olabilir:
                * 
                * - `pathname`: A string representing the path to link to.
                * - `pathname`: Bağlanacak yolun bir dizesi.
                * 
                * - `search`: A string representation of query parameters.
                * - `search`: Sorgu parametrelerinin bir dize temsilcisi.
                * 
                * - `hash`: A string representation of a URL fragment.
                * - `hash`: Bir URL parçasının bir dize temsilcisi.
                * 
                * - `state`: An object to be passed as location state to the target location.
                * - `state`: Hedef konuma konum durumu olarak iletilmesi gereken bir nesne.
                * 
                * https://reactrouter.com/en/main/start/tutorial#client-side-routing
            
            */}
          {contacts.length ? (
            <ul>
              {contacts.map((contact: ContactInfo) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                        {contact.favorite ? "★" : "☆"}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Contacts / Kişi Yok</i>
            </p>
          )}

          {/*  */}
        </nav>
      </div>
      <div
        id="detail"
        // useNavigation returns the current navigation state: it can be one of "idle" | "submitting" | "loading".
        // useNavigation, geçerli navigasyon durumunu döndürür: "idle" | "submitting" | "loading" olabilir.
        className={navigation.state === "loading" ? "loading" : ""}
      >
        {/* 
            * The nested route's element will be rendered here.
            * İç içe geçmiş rota elemanı burada render edilecek.
            
            <Outlet/> are used to render the child routes of the parent route.
            <Outlet/>, üst rotanın çocuk rotalarını render etmek için kullanılır.

            https://reactrouter.com/en/main/start/tutorial#nested-routes
            
        */}
        <Outlet />
      </div>
    </>
  );
}
