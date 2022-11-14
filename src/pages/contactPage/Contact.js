import "antd/dist/antd.css";
import clsx from "clsx";
import Title from "../../title/Title";
import style from "./Contact.module.scss";
import image from "../../assets/images/mail.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const data = { background: "Contact", title: "Contact Me" };

function Contact() {
  return (
    <div className={style.container}>
      <Title data={data} />
      <br />
      <div className={style.contact}>
        <div className={style.image}>
          <img src={image} alt="mail" border="0" className={style.mail} />
        </div>
        <div className={style.form}>
          <div>
            <input type="text" placeholder="Name" className={style.yourInfo} />
            <input type="text" placeholder="Email" className={style.yourInfo} />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={clsx(style.yourInfo, style.subject)}
          />
          <textarea
            placeholder="Message"
            id="txtArea"
            rows="10"
            cols="70"
            className={style.textArea}
          ></textarea>
          <button className={style.button}>
            <FontAwesomeIcon icon={faPaperPlane} className={style.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
