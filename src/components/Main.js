import React, { useContext, useEffect } from "react";
import { currentUser } from "../context/cotextApi";
import { logOut } from "../actions/auth";

function Main({ history }) {
  const { user, setCurrentUser } = useContext(currentUser);

  useEffect(() => {
    if (!user.isAuthenticated) {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <div>
      <div>main</div>
      <button
        onClick={() => {
          logOut(setCurrentUser);
        }}
      >
        logOut
      </button>
    </div>
  );
}

export default Main;
