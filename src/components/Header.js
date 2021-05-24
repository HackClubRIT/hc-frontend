import "./header.css";
import logo from "./images/hackFlag.png";
import Button from "./Button";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-box">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="text-box">
                <h1 class="heading-primary">
                    <span className="heading-primary-main"> Hack Club RIT</span>
                    <span className="heading-primary-sub">
                        To cultivate a community of makers
                    </span>
                </h1>
                <Button />
            </div>
        </header>
    );
};

export default Header;
