import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import socketIOClient from "socket.io-client";

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const socketio = socketIOClient("http://localhost:3001");
  const [chats, setChats] = useState([]);

  // Listen for messages from the server
  useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });

    // Cleanup socket listener on unmount
    return () => {
      socketio.off("chat");
    };
  }, []);

  // Emit message to the server
  const sendToSocket = (chat) => {
    socketio.emit("chat", chat);
  };

  // Add a new message and send to server
  const addMessage = (chat) => {
    const newChat = {
      ...chat,
      username: localStorage.getItem("user"), // ✅ fixed key
      avatar: localStorage.getItem("avatar"),
    };

    const updatedChats = [...chats, newChat];
    setChats(updatedChats);
    sendToSocket(updatedChats); // sending the updated chat list
  };

  // Logout function
  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  };

  return (
    <div>
      {user ? (
        <div className="home">
          <div className="chats_header">
            <h4>Username: {user}</h4>
            <p>REAL-TIME CHAT APPLICATION</p>
            <p className="chats_logout" onClick={Logout}>
              <button>
                <strong>Logout</strong>
              </button>
            </p>
          </div>
          <ChatLists chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;
