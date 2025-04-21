import { Link } from 'react-router-dom';

export default function Sidebar({ onNewChat }) {
  return (
    <div className="sidebar">
      <Link to="/" onClick={onNewChat}>New Chat</Link>
      <Link to="/history">Past Conversations</Link>
    </div>
  );
}
