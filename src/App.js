import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "@hackclub/theme";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/auth/ProfilePage";
import FeedbackPage from "./pages/FeedbackPage";
import ApplicationPage from "./pages/ApplicationsPage";
import AuthApplicationPage from "./pages/auth/Application";
// import ColorSwitcher from "./components/ColorSwitcher";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
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
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile/application" exact>
            <AuthApplicationPage />
          </Route>
        )}
        <Route
          path="/conduct"
          render={() => (window.location = "https://hackclub.com/conduct/")}
        />
        <Route
          path="/philosophy"
          render={() => (window.location = "https://hackclub.com/philosophy/")}
        />
        {/* <Route path="/profile/application/:id">
                <AuthApplicationPage />
            </Route> */}
        {/* <Route path="/profile/events"><AuthEventsPage /></Route>
            <Route path="/profile/feedback"><AuthFeedbackPage /></Route> */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
