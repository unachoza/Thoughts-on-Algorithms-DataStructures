import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main';
import Form from './Components/Form';

interface State {
  addNew: boolean;
  showList: boolean;
}
//<{}, State>
class App extends Component<{}, State> {
  state: any = {
    addNew: false,
    showList: false,
  };
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <div className="App-link">Algorithms Practice</div>
            <Form />
            {/* <div>
              <button>Add New Algorithm</button>
              <button>Show List</button>
            </div>
            <div>{this.state.addNew ? <Form /> : null}</div>
            <div>{this.state.showList ? <Main /> : null}</div> */}
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
