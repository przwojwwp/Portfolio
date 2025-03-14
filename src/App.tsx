import "./App.css";
import { Header } from "./components/Header/Header";
import { MatrixRain } from "./components/MatrixRain/MatrixRain";
import { ProjectsList } from "./components/ProjectsList/ProjectsList";

export function App() {
  return (
    <>
      <Header />
      <ProjectsList />

      <MatrixRain />
    </>
  );
}
