import logo from './logo.svg';
import homePhoto from './Images//homePhoto.JPG';
import './App.css';
import AboutMe from './Pages/AboutMe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <AboutMe> </AboutMe>
        </p>
        <img src={homePhoto} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 
