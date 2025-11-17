import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function ChatMessage({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`w-full flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xl px-4 py-2 rounded-xl shadow 
          ${isUser ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-600"}`}
      >
        {typeof content === "string" ? (
          <p>{content}</p>
        ) : (
          <div>
            <p>{content.description}</p>

            <SyntaxHighlighter language="json">
              {JSON.stringify(content.table, null, 2)}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}
