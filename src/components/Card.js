function Card({ data, onCardClick }) {
  function handleClick() {
    onCardClick(data);
  }

  return (
    <li className="element">
      <img
        src={data.link}
        alt={data.name}
        className="element__image"
        onClick={handleClick}
      />
      <button className="element__trash" type="button"></button>
      <div className="element__title-and-like">
        <h2 className="element__title">{data.name}</h2>
        <div className="element__like-and-counter">
          <button className="element__like" type="button"></button>
          <span className="element__like-counter">0</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
