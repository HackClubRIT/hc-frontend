import logo from "../assets/flag.png";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img className="footer__logo" src={logo} alt="logo" />
      </div>
      <div className="row">
        <div className="col">
          <div className="footer__nav">
            <ul className="footer__list">
              <Links href="newsletter" label="Newsletter" type="footer" />
              <Links href="feedback" label="Feedback" type="footer" />
              <Links
                href="https://hackclub.com/philosophy/"
                label="Philosophy"
                type="footer"
                external="true"
              />
              <Links
                href="https://hackclub.com/conduct/"
                label="Code of Conduct"
                type="footer"
                external="true"
              />
            </ul>
          </div>
        </div>
        <div className="col">
          <p className="footer__copyright">
            Built by{" "}
            <a href="https://github.com/irenekurien/" className="footer__link">
              Irene
            </a>{" "}
            &amp;{" "}
            <a href="http://github.com/UKnowWhoIm/" className="footer__link">
              Sidarth.
            </a>{" "}
            Copyright &copy; 2021.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
