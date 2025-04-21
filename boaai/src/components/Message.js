import { useState } from 'react';

export default function Message({ message }) {
  const [hovered, setHovered] = useState(false);
  const isAI = message.sender === 'ai';

  return (
    <div
      className={`message ${isAI ? 'ai' : 'user'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isAI ? <span>Soul AI</span> : <strong>You</strong>}
      <p>{message.text}</p>
      {isAI && hovered && (
        <div className="feedback">
          <button>👍</button>
          <button>👎</button>
        </div>
      )}
    </div>
  );
}
