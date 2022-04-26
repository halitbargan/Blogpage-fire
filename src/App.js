import './App.css';
import AppRouter from './app-router/AppRouter';
import AuthContextProvider from './context/AuthContext';


function App() {
  return (
    <div>
    <AuthContextProvider>
    <AppRouter/>
    </AuthContextProvider>

    </div>
  );
}

export default App;
