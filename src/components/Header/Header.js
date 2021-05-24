import "./header.scss";
import logo from "./images/hackFlag.png";
import Button from "../Button/Button";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img className="header__logo" src={logo} alt="logo"></img>
            </div>
            <div className="header__text-box">
                <h1 class="heading-primary">
                    <span className="heading-primary--main"> Hack Club RIT</span>
                    <span className="heading-primary--sub">
                        To cultivate a community of makers
                    </span>
                </h1>
                <Button />
            </div>
        </header>
    );
};

export default Header;
