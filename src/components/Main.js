import React from "react";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Catalog from "../pages/Catalog";

function Main() {
  useHistory().listen(() => {
    //  window.scrollTo(0, 0);
  });
  return (
    <main id="main">
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route path="/კატალოგი" render={(props) => <Catalog {...props} />} />
      </Switch>
    </main>
  );
}

export default withRouter(Main);
