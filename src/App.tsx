// import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
// import { MatrixRain } from "./components/MatrixRain/MatrixRain";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";

export function App() {
  // const [isRaining, setIsRaining] = useState(false);

  // const handleMatrixRain = () => {
  //   setIsRaining(!isRaining);
  // };

  return (
    <>
      {/* <button onClick={handleMatrixRain}>
        {isRaining ? "Stop The Rain" : "Let's Raining"}
      </button> */}
      <Header />
      <ProjectsList />

      {/* {isRaining && <MatrixRain />} */}
    </>
  );
}
