import emailjs from "@emailjs/browser";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from "@lottiefiles/react-lottie-player";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Title from "../../title/Title";
import style from "./Contact.module.scss";

const data = { background: "Contact", title: "Contact Me" };

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSend, setIsSend] = useState(false);
  const stateDarkMode = useSelector(state => state.DarkMode);

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
  const sendRef = useRef();

  const handleSubmit = (e) => {
    if (name !== "" && email !== "" && message !== "" && subject !== "" ) {
      setIsSend(true);
      sendRef.current.play();
      emailjs
        .sendForm(
          "service_521tord",
          "template_xoqablr",
          form.current,
          "kUl-p8IOnFqcIBllZ"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              // setIsSend(true);
              // sendRef.current.play();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );

      setTimeout(() => {
        setIsSend(false);
        sendRef.current.stop();
      }, 4000);
      clearTimeout();
    }
    e.preventDefault();
  };

  return (
      <div className={style.container}>
        <Title data={data} />
        <div className={isSend ? style.popup : style.disable}>
          <div className={style.popup__content}>
            <Player
              className={style.send}
              ref={sendRef}
              loop
              src={require("../../assets/json/send-success.json")}
              style={{ height: "500px", width: "500px" }}
            ></Player>
          </div>
        </div>
        <br />
        <div className={style.contact}>
          <div className={style.image}>
            <Player
              autoplay
              loop
              src={require(`../../assets/json/mail${stateDarkMode ? "-yellow" : ""}.json`)}
              className={style.mail}
            ></Player>
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
                  style={{marginRight: "10px"}}
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
                  style={{marginLeft: "10px"}}
                />
                {email === "" ? (
                  <label className={style.error}>This is required</label>
                ) : null}
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
              cols="60"
              className={style.textArea}
              onChange={handleInputMessage}
              name="message"
            ></textarea>
            {message === "" ? (
              <label className={style.error}>This is required</label>
            ) : null}
            <button
              className={style.button}
              onClick={handleSubmit}
              type="submit"
            >
              <FontAwesomeIcon icon={faPaperPlane} className={style.icon} />
            </button>
          </form>
        </div>
      </div>
  );
}

export default Contact;
