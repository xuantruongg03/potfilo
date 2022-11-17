import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import image from "../../assets/images/mail.webp";
import Title from "../../title/Title";
import style from "./Contact.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const data = { background: "Contact", title: "Contact Me" };

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleInputMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const handleSubmit = (e) => {
    //send email
    emailjs
      .sendForm(
        "service_521tord",
        "template_xoqablr",
        form.current,
        "fz9bZCXPzXILDAPZ-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.container}>
      <Title data={data} />
      <br />
      <div className={style.contact}>
        <div className={style.image}>
          <img src={image} alt="mail" border="0" className={style.mail} />
        </div>
        <form ref={form} className={style.form} onSubmit={handleSubmit}>
          <div className={style.groupParent}>
            <div className={style.group}>
              <input
                type="text"
                placeholder="Name"
                className={style.yourInfo}
                onChange={handleInputName}
                name="name"
              />
              {name === "" ? (
                <label className={style.error}>This is required</label>
              ) : null}
            </div>
            <div className={style.group}>
              <input
                type="email"
                placeholder="Email"
                className={style.yourInfo}
                onChange={handleInputEmail}
                name="email"
              />
              {email === "" ? (
                <label className={style.error}>This is required</label>
              ) : null}
              {/* {email.includes("@") ? null : (
                <label className={style.error}>Invalid email</label>
              )} */}
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className={clsx(style.yourInfo, style.subject)}
              onChange={handleInputSubject}
              name="subject"
            />
            {subject === "" ? (
              <label className={style.error}>This is required</label>
            ) : null}
          </div>
          <textarea
            placeholder="Message"
            id="txtArea"
            rows="10"
            cols="70"
            className={style.textArea}
            onChange={handleInputMessage}
            name="message"
          ></textarea>
          {message === "" ? (
            <label className={style.error}>This is required</label>
          ) : null}
          <button className={style.button} onClick={handleSubmit} type ="submit">
            <FontAwesomeIcon icon={faPaperPlane} className={style.icon} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
