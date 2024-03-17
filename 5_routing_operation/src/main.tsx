import ReactDOM from "react-dom/client";
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error_page";
import Contact from "./routes/contact";

//* Define our routes
//* Rotalarımızı tanımlayalım
const routes: RouteObject[] = [
  // Define the root route.
  // Kök rotayı tanımladık.
  {
    path: "/",
    element: <Root />,
    children: [
      // Add a new route for the contact page - letişim sayfası için yeni bir rota ekledik.
      // This route will have a dynamic segment for the contact's ID. - Bu rota, iletişim kişisinin kimliği için dinamik bir segmente sahip olacak.
      // Nested routes are rendered inside the parent route's element. - İç içe geçmiş rotalar, üst rotanın elementi içinde render edilir.
      {
        path: "/contacts/:id",
        element: <Contact />,
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
  <>
    <RouterProvider router={router} />
  </>
);
