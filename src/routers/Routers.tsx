import { createHashRouter } from "react-router-dom";
import { Path } from "../util/path";
import NotFound from "../pages/NotFound";
import ProductLists from "../pages/ProductLists";
import Bookmark from "../pages/Bookmark";
import App from "../App";
import Home from "../pages/Home";

const router = createHashRouter([
  {
    path: "/",

    element: <App />,
    children: [
      {
        path: Path.HOME,
        element: <Home />,
      },
      {
        path: Path.PRODUCT,
        element: <ProductLists />,
      },
      {
        path: Path.BOOKMARK,
        element: <Bookmark />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
