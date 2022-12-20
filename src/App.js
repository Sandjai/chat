import React, { useEffect, useReducer } from "react";
import { JoinBlock } from "./components/JoinBlock/JoinBlock";
import { reducer } from "./reducer";
import socket from "./socket";
import { Chat } from "./components/Chat/Chat";
import axios from "axios";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });

  const onJoin = async (obj) => {
    dispatch({
      type: "JOINED",
      payload: obj,
    });
    socket.emit("ROOM:JOIN", obj);

    const { data } = await axios.get(`/rooms/${obj.roomId}`);

    dispatch({
      type: "SET_DATA",
      payload: data,
    });
  };

  const setUsers = (users) => {
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };

  const addMessage = (message) => {
    dispatch({
      type: "NEW_MESSAGE",
      payload: message,
    });
  };

  useEffect(() => {
    socket.on("ROOM:SET_USERS", setUsers);
    socket.on("ROOM:NEW_MESSAGE", addMessage);
  }, []);

  console.log(state);
  return (
    <>
      {!state.joined ? (
        <JoinBlock onJoin={onJoin} />
      ) : (
        <Chat {...state} onAddMessage={addMessage} />
      )}
    </>
  );
}

export default App;
