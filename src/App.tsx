import "./App.css";
import { Header } from "./components/Header/Header";
import { MatrixRain } from "./components/MatrixRain/MatrixRain";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { useSelector } from "react-redux";
import { selectMatrixRain } from "./features/MatrixRain/matrixRainSlice";

export function App() {
  const isMatrixRainEnabled = useSelector(selectMatrixRain);

  return (
    <>
      <Header />
      <ProjectsList />
      {isMatrixRainEnabled && <MatrixRain />}
    </>
  );
}
