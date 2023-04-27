function ImagePopup({ onClose, card }) {
    return (
        <figure className={`popup popup__card-image ${card.isOpen && "popup_opened"}`}
        >
            <button
                type="button"
                className="popup__close"
                onClick={onClose}
            ></button>
            <img
                className="popup-card-image__photo"
                src={сard.link}
                alt={card.name}
            />
            <figcaption className="popup-card-image__figcaption">{card.name}</figcaption>
        </figure>
    );
}

export default ImagePopup;