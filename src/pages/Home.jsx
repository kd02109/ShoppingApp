import { useState } from "react";
import Header from "../components/Header";

function Home() {
  const [click, setClick] = useState(false);
  return (
    <>
      <Header setClick={setClick} click={click} />
    </>
  );
}

export default Home;
