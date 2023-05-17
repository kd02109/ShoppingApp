import { useDispatch, useSelector } from "react-redux";
import { dispatchHambegerClose } from "../redux/action/actions";

export default function useClick() {
  const state = useSelector((state) => state.hamberger);
  const dispatch = useDispatch();
  const onClick = () => {
    if (state) {
      dispatch(dispatchHambegerClose());
    }
  };
  return { onClick };
}
