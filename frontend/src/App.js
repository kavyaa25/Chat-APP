import ChatPage from "./pages/ChatPage";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ChatPage />
    </ThemeProvider>
  );
}

export default App;
