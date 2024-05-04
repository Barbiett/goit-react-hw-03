import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
export default function Contact({
  contact: { name, number, id },
  deleteContact,
}) {
  return (
    // <li className={css.item}>
    //   <div className={css.span}>
    //
    //     <span>{name}</span>
    //
    //     <span>{number}</span>
    //   </div>
    //   <button className={css.button} onClick={() => deleteContact(id)}>
    //     Delete
    //   </button>
    // </li>
    <li style={{ listStyle: "none" }}>
      <div className={css.listItem}>
        <div className={css.info}>
          <p>
            <FaUser style={{ paddingRight: "20" }} />
            {name}
          </p>
          <p>
            <FaPhoneAlt style={{ paddingRight: "20" }} />
            {number}
          </p>
          <a href={`tel:+${number}`}></a>
        </div>
        <button
          className={css.button}
          id={id}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
