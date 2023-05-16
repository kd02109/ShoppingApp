import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductLists from "../pages/ProductLists";
import Bookmark from "../pages/Bookmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/products/list",
    element: <ProductLists />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
  },
]);

export default router;
