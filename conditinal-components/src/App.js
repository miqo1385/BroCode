import logo from './logo.svg';
import './App.css';
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <UserGreeting isLoggedIn = {true} username="miqo1385"></UserGreeting>
  );
}

export default App;
