import './App.css';
import RestApi from './Pages/RestApi';
import AudioPlay from "./Pages/AudioPlay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Codaemon</h1>
        <RestApi/>
        <br></br>
        <br></br>
        <AudioPlay/>
      </header>
    </div>
  );
}

export default App;
