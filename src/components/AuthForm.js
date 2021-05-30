import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { isEmailValid } from "../utils/validiate";
import AuthContext from "../store/auth-context";

const AuthForm = () => {

  const history = useHistory();

  const emailInuputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(false);

  const swithAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInuputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isEmailValid(enteredEmail)) {
      const formData = new FormData();
      formData.append("username", enteredEmail);
      formData.append("password", enteredPassword);

      if (isLogin) {
      } else {
        try {
          const res = await axios.post(
            "http://localhost:8000/auth/token/",
            formData
          );
          authCtx.login(res.data.access_token);
          history.push("/profile/application")
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
    }
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className="auth__control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInuputRef} />
          </div>
          <div className="auth__control">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="auth__actions">
            <button className="btn--orange">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <button
              type="button"
              className="btn--toggle"
              onClick={swithAuthModeHandler}
            >
              {isLogin
                ? "Create a new Account"
                : "Login with an existing account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
