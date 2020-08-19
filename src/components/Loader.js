import React from "react";
import ReactLoading from "react-loading";

function Loader({ cl }) {
  return <ReactLoading type="spin" className={`loader ${cl}`} />;
}

export default Loader;
