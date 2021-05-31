import { Link } from "react-router-dom";

const Links = ({ href, label, type, external = false }) => {
  return (
    <li className={`${type}__item`}>
      {external === false ? (
        <Link className={`${type}__link`} to={`/${href}`}>
          {label}
        </Link>
      ) : (
        <a className={`${type}__link`} href={href}>
          {label}
        </a>
      )}
    </li>
  );
};

export default Links;
