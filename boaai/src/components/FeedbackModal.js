import { useState } from 'react';

import './App.css';

export default function FeedbackModal({ chatId, onClose }) {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const allFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
    allFeedback.push({ chatId, rating, text });
    localStorage.setItem('feedback', JSON.stringify(allFeedback));
    onClose();
  };

  return (
    <div className="modal">
      <h3>Provide Additional Feedback</h3>
      <div>
        {[1, 2, 3, 4, 5].map((r) => (
          <button key={r} onClick={() => setRating(r)}>{r}</button>
        ))}
      </div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
