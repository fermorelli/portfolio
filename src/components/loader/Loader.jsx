import { SpinningOrbitLoader } from "react-loaders-kit";
import './loader.css';

export const Loader = ()=> {

  const loaderProps = {
    loading: true,
    size: 200,
    duration: 10,
    color: "#FFF",
  };

  return (
    <div className="loader">
        <SpinningOrbitLoader {...loaderProps} />
    </div>
  );
}