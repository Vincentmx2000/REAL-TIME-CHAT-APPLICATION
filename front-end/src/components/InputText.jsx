import React, { useState } from "react";

const InputText = ({addMessage}) => {
    const [message, setMessage] = useState()
    const sendMessage = () => {
        addMessage({message})
        setMessage("")
    }
  return (
    <div className="inputtext_container">
      <textarea
        name="message"
        id="message"
        rows="6"
        placeholder="Write Here!"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputText;