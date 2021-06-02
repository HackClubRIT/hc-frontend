import Header from "../components/Header";
import About from "../components/About";
import Event from "../components/Events";

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <div className="section section-events">
        <div className="u-center-text u-margin-bottom-medium">
          <h2 className="heading-secondary rainbow-text">Events</h2>
        </div>
        <div className="row">
          <Event
            name="web dev"
            desc="lorem lorem loremlor emlore mlore mloreml oremlor emlor em"
            date="12/02/2021"
            link="blah"
          />
          <Event
            name="web dev"
            desc="lorem lorem loremlor emlore mlore mloreml oremlor emlor em"
            date="12/02/2021"
          />
          <Event
            name="web dev"
            desc="lorem lorem loremlor emlore mlore mloreml oremlor emlor em"
            date="12/02/2021"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
