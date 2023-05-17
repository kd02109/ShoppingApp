const initialvalue = false;

export const HAMBEGER_OPEN = "HAMBEGER_OPEN";

const hambegerReducer = (state = initialvalue, action) => {
  const { type } = action;
  switch (type) {
    case HAMBEGER_OPEN:
      return !state;
    default:
      return state;
  }
};
export default hambegerReducer;
