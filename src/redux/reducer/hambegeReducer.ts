const initialvalue = false;

export const HAMBEGER_OPEN = "HAMBEGER_OPEN";
export const HAMBEGER_CLOSE = "HAMBEGER_CLOSE";

interface HamberActions {
  type: "HAMBEGER_OPEN" | "HAMBEGER_CLOSE";
}

const hambegerReducer = (state = initialvalue, action: HamberActions) => {
  const { type } = action;
  switch (type) {
    case HAMBEGER_OPEN:
      return !state;
    case HAMBEGER_CLOSE:
      return false;
    default:
      return state;
  }
};
export default hambegerReducer;
