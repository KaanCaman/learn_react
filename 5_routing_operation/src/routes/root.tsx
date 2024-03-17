// https://reactrouter.com/en/main/start/tutorial#the-root-route

import { Outlet, Link } from "react-router-dom";

//* The Root Route
//* Kök Rotası
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
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

            <li>
              <Link to={`/contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`/contacts/2`}>Your Friend</Link>
            </li>
          </ul>
          {/*  */}
        </nav>
      </div>
      <div id="detail">
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
