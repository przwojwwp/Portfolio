import { useSelector } from "react-redux";
import "./Header.scss";
import { selectMatrixRain } from "@/features/MatrixRain/matrixRainSlice";

export const Header: React.FC = () => {
  const isMatrixRainEnabled = useSelector(selectMatrixRain);
  return (
    <header>
      <h1 style={{ color: isMatrixRainEnabled ? "white" : "black" }}>
        Wojciech Przyłuski - Portfolio
      </h1>
    </header>
  );
};
