import {
  selectMatrixRain,
  toggleMatrixRain,
} from "@/features/MatrixRain/matrixRainSlice";
import { Button } from "../Button/Button";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";

export const Header: React.FC = () => {
  const isMatrixRainEnabled = useSelector(selectMatrixRain);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1>Wojciech Przyłuski - Portfolio</h1>
      <Button handleButtonClick={() => dispatch(toggleMatrixRain())}>
        {isMatrixRainEnabled ? (
          <>
            Stop
            <br /> The
            <br /> Rain
          </>
        ) : (
          <>
            Make
            <br /> It
            <br /> Rain
          </>
        )}
      </Button>
    </header>
  );
};
