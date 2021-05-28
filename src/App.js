import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "@hackclub/theme";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/ProfilePage";
import FeedbackPage from "./pages/FeedbackPage";
import ApplicationPage from "./pages/ApplicationsPage";
import AuthApplicationPage from "./pages/auth/Application";
import ColorSwitcher from "./components/ColorSwitcher";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <ColorSwitcher />
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
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/profile/application" exact>
          <AuthApplicationPage />
        </Route>
        {/* <Route path="/profile/application/:id">
                <AuthApplicationPage />
            </Route> */}
        {/* <Route path="/profile/events"><AuthEventsPage /></Route>
            <Route path="/profile/feedback"><AuthFeedbackPage /></Route> */}
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
