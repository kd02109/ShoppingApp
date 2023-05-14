import { useState } from "react";

export default function useHeaderClick() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    if (click) {
      setClick(false);
    }
  };
  return { click, setClick, handleClick };
}
