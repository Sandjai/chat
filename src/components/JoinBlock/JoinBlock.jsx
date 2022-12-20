import styles from "./styles.module.css";
import { socket } from "../../socket";
import React from "react";
import { useState } from "react";
import axios from "axios";

export const JoinBlock = ({ onJoin }) => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onEnter = () => {
    if (!roomId || !userName) {
      console.error("no data");
    }

    const obj = {
      roomId,
      userName,
    };

    setLoading(true);
    axios.post("/rooms", obj).then(() => {
      onJoin(obj);
      setLoading(false);
    });
  };

  return (
    <div className={styles.root}>
      <input
        type="text"
        placeholder="Room ID"
        name="roomid"
        value={roomId}
        onChange={(event) => {
          setRoomId(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Компания"
        name="company"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        disabled={isLoading}
        className={styles.btn}
        type="text"
        onClick={() => onEnter()}
      >
        {isLoading ? "Вход..." : "Войти"}
      </button>
    </div>
  );
};
