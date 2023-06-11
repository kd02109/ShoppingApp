import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTamplet";
import { RootState } from "../redux/reducer/store";

function ProductLists() {
  const state = useSelector<RootState, RootState["bookmark"]>(
    (state) => state.bookmark
  );

  return <PageTemplate state={state!} />;
}

export default ProductLists;
