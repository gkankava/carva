import React, { useEffect } from "react";
import CategoryNav from "../components/CategoryNav";
import CategoryMainPage from "../components/CatalogMainPage";
import Breadcrumbs from "../components/breadcrumbs";
import set from "../components/shset";

function Catalog() {
  useEffect(() => {
    set();
  });

  return (
    <section id="catalog">
      <CategoryNav />
      <div id="catalog-main" className="container">
        <Breadcrumbs />
        <hr />
        <CategoryMainPage />
      </div>
    </section>
  );
}

export default Catalog;
