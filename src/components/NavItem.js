const NavItem = ({ href, label }) => {
  return (
    <li className="nav__item">
      <a className="nav__link" href={`http://localhost:3000/${href}`}>
        {label}
      </a>
    </li>
  );
};

export default NavItem;
