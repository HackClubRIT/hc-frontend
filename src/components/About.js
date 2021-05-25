import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary rainbow-text">Who are we?</h2>
      </div>

      <div className="row">
        <div className="col">
          <h3 className="heading-tertiary u-margin-bottom-small">
            About Hack Club
          </h3>
          <p className="paragraph">
            Hack Club is a nonprofit network of high school coding clubs and
            makers around the world. Learning to code is uniquely like gaining a
            superpower—turning you from a consumer of technology into a creator.
            So it shouldn’t be taught like a class, it should be a{" "}
            <span className="underline--magical">
              creative, inclusive space
            </span>
            . To foster this environment, every Hack Club is student-led &
            members make self-directed projects.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            We are Hack Club RIT.
          </h3>
          <p className="paragraph">
            Hack Club RIT, was launched in 2021 with the following aim.
            <li>
              <span className="underline--magical">
                to explore, learn and teach
              </span>{" "}
              technology that is out of reach in the college curriculum to the
              students.
            </li>
            <li>
              to create a platform for{" "}
              <span className="underline--magical">anyone</span> who wishes to
              learn tech.
            </li>
            <li>
              to create a community of like-minded people who{" "}
              <span className="underline--magical">collaborate </span>
              and <span className="underline--magical">help each other </span>
              and <span className="underline--magical">grow</span> together.
            </li>
          </p>
          <a href={"/about"} className="btn-text">
            Learn More &rarr;
          </a>
        </div>
        <div className="col">
          <div className="composition">
            <img
              src={img1}
              alt="1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={img2}
              alt="2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={img3}
              alt="3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
