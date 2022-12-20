import React from "react";
import styles from "./styles.module.css";

export const Form = ({ onSendMessage, messageValue, setMessageValue }) => {
  return (
    <div className={styles.root}>
      <form>
        <fieldset>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className={styles.control}
            rows="3"
          ></textarea>
          <button
            onClick={() => {
              onSendMessage();
              setMessageValue("");
            }}
            type="button"
            className={styles.btn}
          >
            Отправить
          </button>
        </fieldset>
      </form>
    </div>
  );
};
