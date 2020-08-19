import React from "react";
import set from "../components/shset";

function Homepage() {
  React.useEffect(() => {
    set();
  }, []);

  return <div style={{ height: "100px" }}>homepage</div>;
}

export default Homepage;
