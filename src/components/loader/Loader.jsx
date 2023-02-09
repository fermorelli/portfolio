import { LineLoader } from "react-loaders-kit";
import './loader.css';

export const Loader = ()=> {

  const loaderProps = {
    loading: true,
    size: 50,
    duration: 2,
    color: "#FFF",
  };

  return (
    <div className="loader">
        <LineLoader  {...loaderProps} />
    </div>
  );
}