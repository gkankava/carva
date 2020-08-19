import React from "react";
import { useLocation, Link } from "react-router-dom";

function Breadcrumbs() {
  let fp = useLocation().pathname;
  let path = useLocation().pathname.substr(10).split("/");
  let routes = path.map((r) => ({
    to: fp.substr(0, fp.lastIndexOf(r) + r.length),
    name: r.substr(0, r.lastIndexOf("-")),
  }));
  return (
    <div className=" breadcrumbs">
      <Link to="/">
        <i className="las la-home"></i>მთავარი
      </Link>
      <span> &#8702; </span>
      <Link to="/კატალოგი">კატალოგი</Link>
      {routes.length > 0 && routes[0].name.length > 0
        ? routes.map((r, i) => (
            <React.Fragment key={i}>
              <span>&#8702;</span>
              <Link to={`${r.to}`}>{r.name}</Link>
            </React.Fragment>
          ))
        : null}
    </div>
  );
}

export default Breadcrumbs;
