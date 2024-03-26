import logo from './logo.svg';
import Student from "./Students";
import './App.css';

function App() {
  return (
      <>
    <Student name="Spongebob" age={30} isStudent = {true}></Student>
    <Student name="Patrick" age={42} isStudent = {false}></Student>
        <Student name="Squidward" age={50} isStudent = {false}></Student>
        <Student name="Sandy" age={27} isStudent = {true}></Student>


      </>
  );
}

export default App;
