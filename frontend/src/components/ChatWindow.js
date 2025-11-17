import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import LoadingDots from "./LoadingDots";

export default function ChatWindow({
  messages,
  streamingText,
  onSend
}) {
  const [input, setInput] = useState("");
  const bottomRef = useRef();

  const handleSend = () => {
    if (input.trim() !== "") {
      onSend(input);
      setInput("");
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  return (
    <div className="flex flex-col w-full h-screen p-6">
      <div className="flex-1 overflow-y-auto space-y-4 pb-20">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}

        {streamingText && (
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 max-w-xl">
            {streamingText}
            <LoadingDots />
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      <div className="w-full flex gap-2 mt-4">
        <input
          className="flex-1 p-3 border rounded-lg dark:bg-gray-800"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="px-4 bg-green-600 text-white rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
