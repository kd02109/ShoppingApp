import { createBrowserRouter } from "react-router-dom";
import { Path } from "../util/path";
import NotFound from "../pages/NotFound";
import ProductLists from "../pages/ProductLists";
import Bookmark from "../pages/Bookmark";
import App from "../App";
import Home from "../pages/Home";

const router = createBrowserRouter(
  [
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
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
