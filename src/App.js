import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/ProfilePage";
import FeedbackPage from "./pages/FeedbackPage";
import ApplicationPage from "./pages/ApplicationsPage";
import AuthApplicationPage from "./pages/auth/Application";

function App() {
    return (
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
    );
}

export default App;
