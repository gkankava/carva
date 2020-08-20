import React, { useContext, useEffect } from "react";
import { useInput } from "../hooks/inputHook";
// import { notify } from "../components/message";
import logo_green from "../media/logo/logo-green.svg";
import { useMutation } from "react-query";
import { auth, onAuth } from "../actions/auth";
import { currentUser } from "../context/cotextApi";

function Login(props) {
  // eslint-disable-next-line
  const { user, setCurrentUser } = useContext(currentUser);
  useEffect(() => {
    if (user.isAuthenticated) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [user]);
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername,
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const [mutate, { isError, isSuccess, data, error }] = useMutation(auth);
  const handleSubmit = async (e) => {
    resetUsername();
    resetPassword();
    e.preventDefault();
    try {
      await mutate({
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (isError) {
    console.log(error.message);
  } else if (isSuccess) {
    onAuth(data)
      .then((res) => {
        setCurrentUser({
          isAuthenticated: !!Object.keys(res).length,
          user: res,
        });
        // props.history.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <section id="login-page" className="bd">
      <div className="grid align__item ">
        <div className="register">
          <div className="logo">
            <img src={logo_green} alt="logo" />
          </div>
          <h2>Sign In</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
              <input
                type="text"
                placeholder="carva@username"
                {...bindUsername}
              />
            </div>
            <div className="form__field">
              <input
                type="password"
                placeholder="••••••••••••••••••••"
                {...bindPassword}
              />
            </div>
            <div className="form__field">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
