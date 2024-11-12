import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [text,setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button text="VIA CHAT SUPPORT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL" icon={<CiMail fontSize="24px" />} />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div className={styles.form_submit_btn}>
            <Button type="submit" text="SUBMIT BUTTON" />
          </div>
        </form>
      <div>{name + " " + email + " " + text} </div>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/service_image.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
