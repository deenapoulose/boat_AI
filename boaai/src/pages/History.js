export default function History() {
    const chats = JSON.parse(localStorage.getItem('chats') || '[]');
    return (
      <div>
        <h1>Past Conversations</h1>
        {chats.map((c, idx) => (
          <div key={idx}>
            {c.messages.map((m, i) => (
              <p key={i}><strong>{m.sender}</strong>: {m.text}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
  