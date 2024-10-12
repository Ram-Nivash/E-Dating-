import React, { useState } from 'react';

function Chat() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    setChatHistory([...chatHistory, message]);
    setMessage('');
    // Add code to send message to backend
  };

  return (
    <div className="chat">
      <h2>Chat</h2>
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className="chat-message">{msg}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleChange}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chat;
