import { useState, useRef } from "react";
import { isEmailValid } from "../utils/validiate";
import axios from "axios";

const AuthForm = () => {
  const emailInuputRef = useRef();
  const passwordInputRef = useRef();

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
          console.log(res);
        } catch (error) {
          alert(error.response.data.detail);
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
