import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';

interface State {
  addNew: boolean;
  showList: boolean;
}
//<{}, State>
class App extends Component<{}, State> {
  state: any = {
    isLoaded: false,
    showList: false,
  };
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <div className="App-link">Algorithms Practice</div>
            <div>
              <button>Add New Algorithm</button>
              <button>Show List</button>
            </div>
            <div>{this.state.showList ? <Main /> : null}</div>
            <a href="https://arianna-dev.vercel.app/" style={{ color: 'white', textDecoration: 'none' }}>
              Back to home
            </a>
          </header>
        </div>
      </>
    );
  }
}
export default App;
