import ReactDOM from "react-dom/client";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error_page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";

import { action as destroyAction } from "./routes/destroy";
import { StrictMode } from "react";

//* Define our routes
//* Rotalarımızı tanımlayalım
const routes: RouteObject[] = [
  // Define the root route.
  // Kök rotayı tanımladık.
  {
    path: "/",
    element: <Root />,

    // Load the root route's data
    // Kök rotanın verilerini yükledik.
    loader: rootLoader,

    // Define the root route's action
    // Kök rotanın eylemini tanımladık.
    action: rootAction,

    children: [
      // Add a new route for the contact page - letişim sayfası için yeni bir rota ekledik.
      // This route will have a dynamic segment for the contact's ID. - Bu rota, iletişim kişisinin kimliği için dinamik bir segmente sahip olacak.
      // Nested routes are rendered inside the parent route's element. - İç içe geçmiş rotalar, üst rotanın elementi içinde render edilir.
      {
        path: "/contacts/:id",
        element: <Contact />,

        loader: contactLoader,
      },

      //   add Edit routes - Düzenleme rotaları ekle
      {
        path: "/contacts/:id/edit",
        element: <EditContact />,
        loader: contactLoader,

        action: editAction,
      },

      // add destroy routes - silme rotası ekle
      {
        path: "/contacts/:id/destroy",
        action: destroyAction,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

//* Create a browser router
//* Tarayıcı yönlendiricisi oluşturalım
const router = createBrowserRouter(routes);

//* Render our app
//* Uygulamamızı render edelim
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
