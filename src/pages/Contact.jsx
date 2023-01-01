import React from "react";
import "./css/contact.css";
import FrmContact from "../components/FrmContact";

const Contact = () => {
  return (
    <div className="contact page-height">
      <h2 className="contact__title h2-page">
        <i className="bx bxs-envelope bx-tada"></i>
        <br />
        Contacto
      </h2>
      <div className="contact__main">
        <section className="contact__info">
          <div className="contact__item">
            <i className="bx bxs-envelope"></i>
            <small>
              <a
                href="mailto:tudiego007@hotmail.com"
                className="contact__small"
              >
                tudiego007@hotmail.com
              </a>
            </small>
          </div>
          <div className="contact__item">
            <i className="bx bxs-phone"></i>
            <small className="contact__small">+593 097 997 6065</small>
          </div>
          <div className="contact__item contact__item-messenger">
            <a
              href="https://api.whatsapp.com/send?phone=5930979976065&text=Hola"
              className="contact__a"
              target="_blank"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://t.me/armando2k"
              className="contact__a"
              target="_blank"
            >
              <i className="bx bxl-telegram"></i>
            </a>
          </div>
        </section>
        <FrmContact />
      </div>
    </div>
  );
};

export default Contact;
