import { useEffect, useState } from "react";
import {
  createSession,
  listSessions,
  sendMessage,
  getHistory,
  deleteSessionApi,
  renameSession,
  rateMessageApi
} from "../services/api";
import { streamResponse } from "../services/streamSimulator";

export default function useChat() {
  const [sessions, setSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [streamingText, setStreamingText] = useState("");

  // LOAD SESSIONS
  useEffect(() => {
    listSessions().then(res => setSessions(res.data));
  }, []);

  const startNewSession = async () => {
    const res = await createSession();
    setSessions(prev => [...prev, res.data]);
    setCurrentSession(res.data.id);
    setMessages([]);
  };

  const loadSession = async (id) => {
    setCurrentSession(id);
    const res = await getHistory(id);
    setMessages(res.data);
  };

  const sendChat = async (text) => {
    const userMsg = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);

    const res = await sendMessage(currentSession, text);

    const aiAnswer = res.data.description;

    streamResponse(aiAnswer, (chunk) => {
      setStreamingText(chunk);
    });

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: res.data }
      ]);
      setStreamingText("");
    }, aiAnswer.length * 20 + 50);
  };

  return {
    sessions,
    currentSession,
    messages,
    streamingText,
    startNewSession,
    loadSession,
    sendChat,
    renameSession,
    deleteSessionApi,
    rateMessageApi
  };
}
