import { useDispatch, useSelector } from "react-redux";
import { dispatchHambegerClose } from "../redux/action/actions";
import { AppDispatch, RootState } from "../redux/reducer/store";

export default function useClick() {
  const state = useSelector<RootState, RootState["hamberger"]>(
    (state) => state.hamberger
  );
  const dispatch: AppDispatch = useDispatch();
  const onClick = () => {
    if (state) {
      dispatch(dispatchHambegerClose());
    }
  };
  return { onClick };
}
