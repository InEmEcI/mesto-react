function PopupWithForm(props) {

  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? `popup_opened`: "" }`}>
    {/* <div className={`popup ${props.isOpen ? `popup_opened`: "" }`}> */}

      <div className="popup__container">

        <button type="button" className="popup__close" onClick={props.onClose} ></button>
        <h2 className="popup__title">{props.title}</h2>

        <form action="#" className={`popup__form form-${props.name}`} name={`form-${props.name}`} noValidate >
          {props.children}
          <button type="submit" className="popup__save">            
            {((props.name === "profile" || props.name === "avatar") && "Сохранить") ||
              (props.name === "add" && "Создать") ||
              (props.name === "delete" && "Да")}
          </button>
        </form>

      </div>

    </div>


    // <div className={`popup popup-${props.name} ${props.isOpen}`} onClick={props.onClose}>

    //   <div className="popup__container" onClick={(evt) => evt.stopPropagation()}>

    //     <button type="button" className="popup__close" onClick={props.onClose} ></button>

    //     <h2 className="popup__title">{props.title}</h2>

    //     <form action="#" className={`popup__form form-${props.name}`} name={`form-${props.name}`} noValidate >

    //       {props.children}

    //       <button type="submit" className="popup__save">
    //         {((props.name === "edit" || props.name === "avatar") &&
    //           "Сохранить") ||
    //           (props.name === "add" && "Создать") ||
    //           (props.name === "delete" && "Да")}
    //       </button>

    //     </form>

    //   </div>

    // </div>

  );
}

export default PopupWithForm;



// function PopupWithForm(props) {
//     return (

//       <div className={`popup popup-${name} ${isOpen ? `popup_opened` : ""}`}>
//             <div className="popup__container">
//                 <button onClick={onClose} type="button" className="popup__close-icon" aria-label="Закрыть"></button>
//                 <h3 className="popup__name">{title}</h3>
//                 <form className={`popup__form popup__form_type_${name}`} name="red-form" noValidate>
//                     {children}
//                     <button type="submit" className="popup__button">{buttonText}</button>
//                 </form>
//             </div>
//         </div>

//   );
// }
  
//   export default PopupWithForm;