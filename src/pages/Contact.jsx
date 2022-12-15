import React from "react";
import "../assets/css/Contact.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const { handleSubmit, register, reset } = useForm();
  const contactReset = {
    name: "",
    email: "",
    message: "",
  };
  const submit = (data) => {
    axios
      .post("https://formsubmit.co/ajax/teouni_jkdiego@hotmail.com", data)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        reset(contactReset);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-wd-container page-height">
      <h2 className="contact-title">
        <i className="bx bxs-envelope bx-tada"></i>
        <br />
        Contacto
      </h2>
      <div className="contact">
        <section className="contact-cards">
          <div className="contact-card">
            <i className="bx bxs-envelope"></i>
            <p className="texto-contacto">
              <small>
                <a href="mailto:tudiego007@hotmail.com" className="a-text">
                  tudiego007@hotmail.com
                </a>
              </small>
            </p>
          </div>
          <div className="contact-card">
            <i className="bx bxs-phone"></i>
            <p className="texto-contacto">
              <small className="a-text">+593 097 997 6065</small>
            </p>
          </div>
          <div className="contact-card messenger">
            <a
              href="https://api.whatsapp.com/send?phone=5930979976065&text=Hola"
              className="br"
              target="_blank"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="https://t.me/armando2k" className="br" target="_blank">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>
        </section>

        <form
          target="_blank"
          // action="https://formsubmit.co/ajax/teouni_jkdiego@hotmail.com"
          // method="POST"
          className="login"
          onSubmit={handleSubmit(submit)}
        >
          <input
            type="text"
            name="name"
            className="input border"
            placeholder="Nombre"
            required
            title="Ingresa tu nombre para ponerme en contacto"
            {...register("name")}
          />
          <input
            type="email"
            name="email"
            className="input border"
            placeholder="email"
            required
            title="Ingresa tu correo para ponerme en contacto"
            {...register("email")}
          />
          <textarea
            placeholder="Escribe tu mensaje"
            className="input"
            name="message"
            rows="8"
            required
            {...register("message")}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
