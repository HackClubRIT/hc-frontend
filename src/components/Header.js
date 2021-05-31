import { Link } from "react-scroll";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hack Club RIT</span>
          <span className="heading-primary--sub">
            To cultivate a community of makers
          </span>
        </h1>
        <Button />
      </div>
      <Link className="indicator__box"
          activeClass="active"
          to="scroll-down"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="indicator">
              <span></span>
              <span></span>
          </div>
        </Link>
    </header>
  );
};

export default Header;
