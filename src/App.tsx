import logo from './mungus.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Believe in Yourself</p>
        <a
          className="App-link"
          href="https://google.com/search?q=why+am+i+so+gay"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't click
        </a>
      </header>
    </div>
  );
}

export default App;
