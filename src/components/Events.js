import image from "../assets/event2.jpeg";

const Event = ({ name, desc, date, link, img }) => {
  return (
    <div className="col-1-of-3">
      <div className="event-box">
        <img src={image} className="event-box__img" alt="event"/>
        <h3 className="heading-tertiary u-margin-bottom-small">{name}</h3>
        <p className="event-box__text u-margin-bottom-small">{desc}</p>

        <p className="event-box__text u-margin-bottom-small">DATE: {date}</p>

        {link && (
          <a className="btn-text" href={link}>
            Register &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default Event;
