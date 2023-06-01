import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTamplet";

function ProductLists() {
  const state = useSelector((state) => state.bookmark);

  return <PageTemplate state={state} />;
}

export default ProductLists;
