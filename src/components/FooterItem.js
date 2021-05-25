const FooterItem = ({ href, label }) => {
  return (
    <li className="footer__item">
      <a className="footer__link" href={`/${href}`}>
        {label}
      </a>
    </li>
  );
};

export default FooterItem;
