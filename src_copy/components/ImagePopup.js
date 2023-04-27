function ImagePopup() {
    return (
        <section className="popup popup-card-image">
            <figure className="popup-card-image__figure">
            <button className="popup__close" type="button"></button>
            <img src="#" alt="#" className="popup-card-image__photo" />
            <figcaption className="popup-card-image__figcaption"></figcaption>
            </figure>
        </section>
    );
  }
  
  export default ImagePopup;