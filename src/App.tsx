import NoteBook from "./components/Notebook";
import "./styles/app.css";

function App() {
  return (
    <div className="container">
      <h2 className="logo">
        <span>Workout</span>
        <span>Regimen</span>
      </h2>
      <h1>Fast & simple workout generator</h1>
      <NoteBook />
    </div>
  );
}

export default App;
