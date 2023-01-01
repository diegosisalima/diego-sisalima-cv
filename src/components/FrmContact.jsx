import "./css/frmContact.css";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const FrmContact = () => {
  const { handleSubmit, register, reset } = useForm();
  const contactReset = {
    name: "",
    email: "",
    message: "",
  };
  const submit = (data) => {
    axios
      .post("https://formsubmit.co/ajax/3e26d6989a268acc38d16950628fdca5", data)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        reset(contactReset);
      })
      .catch((error) => console.log(error));
  };
  return (
    <form className="frm-contact" onSubmit={handleSubmit(submit)}>
      <input
        className="frm-contact__input"
        type="text"
        name="name"
        placeholder="Nombre"
        required
        title="Ingresa tu nombre"
        {...register("name")}
      />
      <input
        className="frm-contact__input"
        type="email"
        name="email"
        placeholder="Email"
        required
        title="Ingresa tu correo"
        {...register("email")}
      />
      <textarea
        className="frm-contact__textarea"
        placeholder="Escribe tu mensaje..."
        name="message"
        rows="8"
        required
        {...register("message")}
      ></textarea>
      <button>Enviar</button>
    </form>
  );
};

export default FrmContact;
