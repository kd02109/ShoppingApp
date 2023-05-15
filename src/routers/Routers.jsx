import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProductLists from "../pages/ProductLists";
import Bookmark from "../pages/Bookmark";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/list",
        element: <ProductLists />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
