import React, { useRef } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    const newUserMessage = { role: "user", text: userMessage };
    const updatedHistory = [...chatHistory, newUserMessage];

    // Add user message to chat history
    setChatHistory(updatedHistory);

    // Delay bot response
    setTimeout(() => {
      // Add "Thinking..." message
      setChatHistory(prev => [...prev, { role: "model", text: "Thinking..." }]);

      // Generate bot response using updated history
      generateBotResponse([...updatedHistory, { role: "model", text: userMessage }]);
    }, 600);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef} type="text" placeholder='Message...' className="message-input" required />
      <button className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
};

export default ChatForm;
