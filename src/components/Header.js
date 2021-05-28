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
    </header>
  );
};

export default Header;
