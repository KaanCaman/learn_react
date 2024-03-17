import ReactDOM from "react-dom/client";
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error_page";

//* Define our routes
//* Rotalarımızı tanımlayalım
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
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
