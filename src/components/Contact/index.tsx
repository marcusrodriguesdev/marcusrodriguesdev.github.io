/* eslint-disable jsx-a11y/anchor-has-content */
import React, { MutableRefObject, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form: MutableRefObject<any> = useRef();
  const [loading, setLoading] = React.useState<boolean>(false);

  const sendEmail = (e: any) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ihhowy",
        "template_3oobmd8",
        form.current,
      )
      .then(
        (result) => {
          alert("Message Send");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );

      console.log('teste');
      
    e.target.reset();
  };

  useEffect(() => {
   emailjs.init("LIZdQV2AveXE3hl53");
  }, []);

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>marcusrodriguesdev@gmail.com</h5>
            <a
              href="marcusrodriguesdev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 (31)9 9366-7947</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5531993667947"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className={loading ? "btn_contact btn_disabled" : "btn btn-primary btn_contact"}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
