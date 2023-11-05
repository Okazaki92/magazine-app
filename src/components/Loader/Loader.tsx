import { Loading } from "notiflix";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    Loading.dots({ svgColor: "blue", svgSize: "100px" });
  }, []);
  return <div id="loading"></div>;
};
export default Loader;
