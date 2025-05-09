import { useState, useEffect } from 'react';
import ChatInput from './ChatInput';
import Message from './Message';
import FeedbackModal from './FeedbackModal';
import data from '../data/responses.json';
import Rating from './Rating';

import './App.css';


export default function Chat({ chatId }) {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (text) => {
    const response = data[text] || "Sorry, Did not understand your query!";
    const newMessages = [...messages, { sender: 'user', text }, { sender: 'ai', text: response }];
    setMessages(newMessages);
  };

  const handleSave = () => {
    const allChats = JSON.parse(localStorage.getItem('chats') || '[]');
    localStorage.setItem('chats', JSON.stringify([...allChats, { id: chatId, messages }]));
    setShowModal(true);
  };

  return (
    <div className="chat">
      <header className="header">
  <h1>Bot AI</h1>
</header>

      <div className="messages">
        {messages.map((msg, idx) => (
          <Message key={idx} message={msg} />
        ))}
      </div>
      <ChatInput onSubmit={handleSubmit} />
      <button type="button" onClick={handleSave}>Save</button>
      {showModal && <FeedbackModal chatId={chatId} onClose={() => setShowModal(false)} />}
    </div>
  );
}

const handleRatingSubmit = (value) => {
  console.log('Rated:', value);
  // Optionally save in localStorage or backend
};

<Rating onRate={handleRatingSubmit} />
