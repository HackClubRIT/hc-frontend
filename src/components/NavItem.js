const NavItem = ({ href, label }) => {
  return (
    <li className="nav__item">
      <a className="nav__link" href={`/${href}`}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
