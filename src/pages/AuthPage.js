import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as api from "../store/fetch";

import { isEmailValid } from "../store/validiate";
import AuthContext from "../store/auth-context";

const AuthPage = () => {
  const history = useHistory();

  const emailInuputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInuputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isEmailValid(enteredEmail)) {
      try {
        const { json } = await api.post("auth/token", {
          type: "formData",
          username: enteredEmail,
          password: enteredPassword,
        });
        authCtx.login(json.access_token);
        history.push("/auth/application");
      } catch (error) {
        let errorMessage;

        if (error.response.status === 422)
          errorMessage = "Please enter a vaild email id or password";
        else if (error.response.status === 500)
          errorMessage = "Opps, something went wrong please try again later!";
        else errorMessage = error.response.data.detail;

        alert(errorMessage);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <h1 className="heading-secondary u-margin-bottom-small">Login</h1>
        <form onSubmit={submitHandler}>
          <div className="auth__control">
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
            <button className="btn--orange">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
