import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

export const Messages = ({ messages }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 9999);
  }, [messages]);
  return (
    <div ref={messagesRef} className={styles.messages}>
      {messages.map((message, index) => (
        <div key={message[0] + index} className={styles.message}>
          <div className={styles.text}>{message.text}</div>
          <div className={styles.name}>
            <i>{message.userName}</i>
          </div>
        </div>
      ))}
    </div>
  );
};
