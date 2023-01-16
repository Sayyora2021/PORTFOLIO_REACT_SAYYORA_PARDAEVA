import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Contact = () => {
  const form = useRef();

  const regexName = /^[a-zA-Záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ\s-]{1,31}$/;
  const regexEmail =
    /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9._-]+[.]{1}[a-zA-Z]{2,4}$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.elements.user_email.value;
    const name = form.current.elements.user_name.value.trim();

    if (!regexEmail.test(email)) {
      mailControl();
      return;
    }
    if (!regexName.test(name)) {
      nameControl();
    } else {
      emailjs
        .sendForm(
          "service_b839iqk",
          "template_25z9fml",
          form.current,
          "Ui27yo6116PlL5HuF"
        )
        .then(
          (result) => {
            console.log(result.text);
            succes();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  function nameControl() {
    swal({
      title: "Oups!",
      text: "Merci de vérifier nom et prénom!",
      icon: "error",
    });
  }
  function mailControl() {
    swal({
      title: "Oups!",
      text: "Ceci n'est pas une adresse email valide!",
      icon: "error",
    });
  }
  function succes() {
    swal({
      title: "Mail est partie avec succès!",
      text: "J'essai de vous répondre en 24 heures!",
      icon: "success",
    });
  }

  return (
    <section className="contact" id="contact">
      <h2>CONTACTEZ-MOI</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>
          <input
            type="text"
            placeholder="Prènom et nom"
            name="user_name"
            required
          ></input>
        </label>

        <label>
          <input type="text" placeholder="Mail" name="user_email" required />
        </label>
        <label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Votre message ici"
            required
          />
          <input type="submit" className="send-btn" value="Envoyer" />
        </label>
      </form>
    </section>
  );
};

export default Contact;
