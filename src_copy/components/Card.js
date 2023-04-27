function Card({ data }) {
    return (
        <li class="element">
            <img src={data.link} alt={data.name} class="element__image" />
            <button class="element__trash" type="button"></button>
            <div class="element__title-and-like">
                <h2 class="element__title">{data.name}</h2>
                <div class="element__like-and-counter">
                    <button class="element__like" type="button"></button>
                    <span class="element__like-counter">0</span>
                </div>
            </div>
        </li>
    )
}

export default Card;