import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "@hackclub/theme";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import EventsPage from "./pages/EventsPage";
import FeedbackPage from "./pages/FeedbackPage";
import Application from "./pages/Applications/Application";
import ApplicationPage from "./pages/Applications/ApplicationsPage";
import ApplicationsViewPage from "./pages/Applications/ApplicationsView";
// import ColorSwitcher from "./components/ColorSwitcher";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      {/* <ColorSwitcher /> */}
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/apply">
          <ApplicationPage />
        </Route>
        <Route path="/events">
          <EventsPage />
        </Route>
        <Route path="/feedback">
          <FeedbackPage />
        </Route>
        <Route path="/scrapbook">
          <FeedbackPage />
        </Route>
        <Route path="/contact">
          <FeedbackPage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/auth/application" exact>
            <ApplicationsViewPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/auth/application/:id" exact>
            <Application />
          </Route>
        )}
        {/* <Route path="/auth/events"><AuthEventsPage /></Route>
            <Route path="/auth/feedback"><AuthFeedbackPage /></Route> */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
