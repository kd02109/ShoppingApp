import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTamplet";

function Bookmark() {
  const state = useSelector((state) => state.bookmark);
  return <PageTemplate state={state.filter((item) => item.bookmarked)} />;
}

export default Bookmark;
