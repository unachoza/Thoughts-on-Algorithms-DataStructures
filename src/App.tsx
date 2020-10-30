import React from 'react';
import './App.css';
import Main from './Components/Main';

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="App-link">Algorithms Practice</div>
          <Main />
          <a href="https://arianna-dev.vercel.app/" style={{ color: 'white', textDecoration: 'none' }}>
            Back to home
          </a>
        </header>
      </div>
    </>
  );
};

export default App;
