import { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import * as api from "../store/fetch";

import { isEmailValid } from "../store/validiate";
import AuthContext from "../store/auth-context";

const AuthPage = () => {
  let e;

  const history = useHistory();

  const emailInuputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInuputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isEmailValid(enteredEmail)) {
      try {
        const { res, json } = await api.post("auth/token/", {
          type: "formData",
          username: enteredEmail,
          password: enteredPassword,
        });

        if (res.ok) {
          if (process.env.DEBUG) console.log(json);
          authCtx.login(json.access_token);
          history.push("/auth/application");
        } else throw res;
      } catch (error) {
        if (error.status === 500)
          e = "Opps, something went wrong please try again later!";
        else e = "Please enter a valid email address or password";
      }
    } else e = "Please enter a valid email address or password";

    setErrorMessage(e);
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <h1 className="heading-secondary ">Login</h1>
        <form onSubmit={submitHandler}>
          <div className="auth__control">
            {errorMessage && (
              <p className="paragraph--red u-margin-bottom-small">
                {errorMessage}
              </p>
            )}
            <label className="heading-tertiary" htmlFor="email">
              Your Email
            </label>
            <input
              className="input"
              type="email"
              id="email"
              required
              ref={emailInuputRef}
            />
          </div>
          <div className="auth__control">
            <label className="heading-tertiary" htmlFor="password">
              Your Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="auth__actions">
            <button className="btn--normal">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
