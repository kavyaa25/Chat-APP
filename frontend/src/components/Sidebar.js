import { useState } from "react";

export default function Sidebar({ sessions, onSelect, onNewChat, onRename, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 h-screen p-4 flex flex-col">
      
      <button 
        onClick={onNewChat}
        className="w-full py-2 mb-4 text-white bg-green-600 rounded-lg">
        + New Chat
      </button>

      <div className="flex-1 overflow-y-auto space-y-2">
        {sessions.map(session => (
          <div
            key={session.id}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg flex justify-between items-center cursor-pointer"
            onClick={() => onSelect(session.id)}
          >
            {editingId === session.id ? (
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onBlur={() => {
                  onRename(session.id, newTitle);
                  setEditingId(null);
                }}
                className="bg-transparent border-b w-full"
              />
            ) : (
              <span>{session.title}</span>
            )}

            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditingId(session.id);
                  setNewTitle(session.title);
                }}
              >
                ✏️
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(session.id);
                }}
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
