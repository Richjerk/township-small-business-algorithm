// src/components/Chatbot.tsx
import React, { useState } from 'react';
import { openAIRequest } from './api'; // Create an API function for OpenAI requests

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    setMessages([...messages, input]);
    setInput('');

    // Send user input to OpenAI and get a response
    const response = await openAIRequest(input);
    setMessages([...messages, response]);
  };

  return (
    <div className="chatbot">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
