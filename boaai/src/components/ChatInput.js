import { useState } from 'react';

import './App.css';

export default function ChatInput({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Message Bot AI..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ask</button>
    </form>
  );
}
