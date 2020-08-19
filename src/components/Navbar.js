import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logos/cb-logo-b.svg";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  let link = (path, txt) => {
    return (
      <li onClick={(e) => setNavActive(false)}>
        <NavLink to={`/${path}`} activeClassName="active-link">
          {txt}
        </NavLink>
      </li>
    );
  };

  return (
    <header className="head-container">
      <Link to="/">
        <img src={logo} alt="cb-logo-img" />
      </Link>
      <h3>ლუქები და დასალუქი მოწყობილობები</h3>
      <nav className={`${navActive}`}>
        <button className="e-store pos">ონლაინ მაღაზია</button>
        <ul>
          {link("ჩვენს-შესახებ", "ჩვენს შესახებ")}
          {link("კატალოგი", "კატალოგი")}
          {link("ტექნოლოგია", "ტექნოლოგია")}
          {link("დაგვიკავშირდით", "დაგვიკავშირდით")}
        </ul>
        <button className="e-store">ონლაინ მაღაზია</button>
        <div className="icon-wrapper">
          <div className="hamburger" onClick={() => setNavActive(!navActive)}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <i className="las la-shopping-bag"></i>
        </div>
        <i className="las la-times " onClick={() => setNavActive(false)}></i>
      </nav>
    </header>
  );
}

export default Navbar;
