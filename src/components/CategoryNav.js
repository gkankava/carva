import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function CategoryNav() {
  // refs

  const navRef = useRef(null);
  const ref = useRef(null);

  // navbar states

  const [navActive, setNavActive] = useState(false);
  const [navFixed, setNavFixed] = useState("category-nav-fixed-false");

  // handle navbar

  const toogleCatNav = () => {
    setNavActive(!navActive);
    if (!navActive) {
      // let height = ref.current.scrollHeight;
      ref.current.style.height = 400 + "px";
    } else {
      ref.current.style.height = 0;
    }
  };

  // scroll event listener to fix navbar

  const handleScroll = () => {
    if (navRef.current !== null) {
      if (navRef.current.getBoundingClientRect().top < 2) {
        setNavFixed("category-nav-fixed");
      }
      if (
        document.getElementById("catalog-main").getBoundingClientRect().top > 62
      ) {
        setNavFixed("category-nav-fixed-false");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // category item render

  const { status, data } = useQuery("categories", async (key) => {
    const { data } = await axios.get("/api/categories");
    return data;
  });

  return (
    <div
      className={`category-nav  container  ${navActive} ${navFixed}`}
      ref={navRef}
    >
      <h3>კატეგორიები</h3>
      <i className={navActive ? "las la-minus" : "las la-plus"}></i>
      <div
        className="accordion__expanding__button"
        onClick={() => toogleCatNav()}
      ></div>
      <nav ref={ref}>
        <ul>
          {status === "success" && data.length > 0
            ? data.map((c) => (
                <li key={c._id}>
                  <NavLink
                    to={{
                      pathname: `/კატალოგი/${c._id}`,
                    }}
                    activeClassName="active-nav-link"
                    onClick={() => toogleCatNav()}
                  >
                    {c.categoryName}
                  </NavLink>
                </li>
              ))
            : null}
        </ul>
      </nav>
    </div>
  );
}
export default CategoryNav;
