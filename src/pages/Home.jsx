import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [click, setClick] = useState(false);
  return (
    <>
      <Header setClick={setClick} click={click} />
      <Footer />
    </>
  );
}

export default Home;
