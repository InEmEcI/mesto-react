// import PopupWithForm from "./PopupWithForm";
// import { useState, useEffect } from "react";
// function AddPlacePopup(props) {
//   const [name, setName] = useState("");
//   const [link, setLink] = useState("");

//   useEffect(() => {
//     setName("");
//     setLink("");
//   }, [props.isOpen]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     props.onUpdatePlace({
//       name,
//       link,
//     });
//   }

//   return (
//     <PopupWithForm
//       onSubmit={handleSubmit}
//       buttonText="Создать"
//       onClose={props.onClose}
//       isOpen={props.isOpen}
//       title="Новое место"
//       name=""
//     ></PopupWithForm>
//   );
// }
// export default AddPlacePopup;
