import "./App.css";
import { Header } from "./components/Header/Header";
import { MatrixRain } from "./components/MatrixRain/MatrixRain";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMatrixRain,
  toggleMatrixRain,
} from "./features/MatrixRain/matrixRainSlice";

export function App() {
  const isMatrixRainEnabled = useSelector(selectMatrixRain);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggleMatrixRain())}>
        {isMatrixRainEnabled ? "Stop The Rain" : "Make It Rain"}
      </button>
      <Header />
      <ProjectsList />

      {isMatrixRainEnabled && <MatrixRain />}
    </>
  );
}
