import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import '../App.css';

export default function Home() {
  const [chatId, setChatId] = useState(Date.now().toString());

  return (
    <div className="app-container">
      <Sidebar onNewChat={() => setChatId(Date.now().toString())} />
      <Chat chatId={chatId} />
    </div>
  );
}
