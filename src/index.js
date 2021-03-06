import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { config } from "dotenv";

import "./sass/main.scss";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

config();

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);
