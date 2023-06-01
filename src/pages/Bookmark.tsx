import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTamplet";
import { RootState } from "../redux/reducer/store";

function Bookmark() {
  const state = useSelector<RootState, RootState["bookmark"]>(
    (state) => state.bookmark
  );
  return (
    <PageTemplate
      state={
        Array.isArray(state) ? state.filter((item) => item.bookmarked) : null
      }
    />
  );
}

export default Bookmark;
