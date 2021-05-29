import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const swithAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form>
          <div className="auth__control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="auth__control">
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required />
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
