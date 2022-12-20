import styles from "./styles.module.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { Form } from "./Form/Form";
import { Messages } from "./Messages/Messages";
import socket from "../../socket";
import { useState } from "react";
export const Chat = ({ users, messages, userName, roomId, onAddMessage }) => {
  const [messageValue, setMessageValue] = useState();

  const onSendMessage = () => {
    socket.emit("ROOM:NEW_MESSAGE", {
      roomId,
      userName,
      text: messageValue,
    });

    onAddMessage({ userName, text: messageValue });
  };
  return (
    <div className={styles.root}>
      <Sidebar>
        <h3>Онлайн ({users.length}): </h3>
        <ul>
          {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </Sidebar>

      <Messages messages={messages} />
      <Form
        onSendMessage={onSendMessage}
        messageValue={messageValue}
        setMessageValue={setMessageValue}
      />
    </div>
  );
};
