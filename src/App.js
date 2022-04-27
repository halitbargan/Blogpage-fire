import "./App.css";
import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import BlogContextProvider from "./context/BlogContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
