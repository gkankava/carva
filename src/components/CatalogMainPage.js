import React from "react";
import { Route } from "react-router-dom";
import CatalogHomePage from "../pages/CatalogHomePage";
import CatalogProducts from "../pages/CatalogProducts";
import ProductMainPage from "../pages/ProductMainPage";

function CatalogMainPage() {
  return (
    <>
      <Route
        exact
        path="/კატალოგი"
        render={(props) => <CatalogHomePage {...props} />}
      />
      <Route
        exact
        path="/კატალოგი/:cat_name"
        render={(props) => <CatalogProducts {...props} />}
      />
      <Route
        exact
        path="/კატალოგი/:cat_name/:p_name"
        render={(props) => <ProductMainPage {...props} />}
      />
    </>
  );
}

export default CatalogMainPage;
