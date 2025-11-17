import useChat from "../hooks/useChat";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function ChatPage() {
  const {
    sessions,
    messages,
    streamingText,
    startNewSession,
    loadSession,
    sendChat,
    renameSession,
    deleteSessionApi
  } = useChat();

  return (
    <div className="flex h-screen">
      <Sidebar
        sessions={sessions}
        onSelect={loadSession}
        onNewChat={startNewSession}
        onRename={renameSession}
        onDelete={deleteSessionApi}
      />

      <ChatWindow
        messages={messages}
        streamingText={streamingText}
        onSend={sendChat}
      />
    </div>
  );
}
