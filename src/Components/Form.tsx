import React, { Component } from 'react';
import '../App.css';

interface State {
  question: boolean;
  categories: boolean;
  bigO: boolean;
  psuedoCode: boolean;
  name: false;

  array: boolean;
  hashTable: boolean;
  linkedList: boolean;
  tree: boolean;
  graph: boolean;
  stack: boolean;
  queue: boolean;
}

class Form extends Component<{}, State> {
  state: any = {
    question: false,
    categories: false,
    bigO: false,
    psuedoCode: false,
    passconf: false,
    array: false,
    hashTable: false,
    linkedList: false,
    tree: false,
    graph: false,
    stack: false,
    queue: false,
  };
  navigate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    let navArr = ['question', 'categories', 'bigO', 'psuedoCode'];
    let name: string = e.currentTarget.value;
    //@ts-ignore
    this.setState({ [name]: true });
    navArr = navArr.filter((nav) => nav !== name);
    //@ts-ignore
    navArr.forEach((nav) => this.setState({ [nav]: false }));
  };
  toggleFork = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    let datastructure = e.currentTarget.value;
    //@ts-ignore
    this.setState({ [datastructure]: !this.state.datastructure });
  };

  render() {
    const dataStructures: string[] = ['array', 'hashTable', 'linkedList', 'tree', 'graph', 'stack', 'queue'];
    const AlgorithmTypes: string[] = ['sorting', 'searching', 'counting', 'bubble'];
    return (
      <div className="container">
        <form action="/register" method="POST" className="form">
          {/* page1 */}
          <div>
            Add Question
            <div className="form-group" id="name">
              <textarea rows={10} name="Username" id="username" className="form-control" placeholder="question" />
            </div>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Next
            </button>
          </div>
          {/* page 2 */}
          <div>
            Select Data Structure
            <div className="data-btn-container">
              <div className="data-group" id="phone-inp">
                {dataStructures.map((type, i) => (
                  <div key={i} className="btn">
                    <input
                      type="checkbox"
                      id={type}
                      name={type}
                      value={type}
                      hidden
                      onClick={(e) => this.state.toggleFork(e)}
                    />
                    <label htmlFor={type} id="checkbox-option">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            Identify Algorithm
            <div className="data-btn-container">
              <div className="data-group" id="phone-inp">
                {AlgorithmTypes.map((type, i) => (
                  <div key={i} className="btn">
                    <input
                      type="checkbox"
                      id={type}
                      name={type}
                      value={type}
                      hidden
                      onClick={(e) => this.state.toggleFork(e)}
                    />
                    <label htmlFor={type} id="checkbox-option">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Back
            </button>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Next
            </button>
          </div>
          {/* page3 */}
          <div>
            Pseudocode
            <div className="form-group" id="name">
              <textarea rows={10} name="Username" id="username" className="form-control" placeholder="question" />
            </div>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Back
            </button>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Next
            </button>
          </div>
          {/* page4 */}
          <div>
            Code
            <div className="form-group" id="name">
              <textarea rows={10} name="Username" id="username" className="form-control" placeholder="question" />
            </div>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Back
            </button>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Next
            </button>
          </div>
          {/* page5 */}
          <div>
            Big O
            <div className="form-group" id="name">
              <input name="Username" id="username" className="form-control" placeholder="Time" />
              <input name="Username" id="username" className="form-control" placeholder="Space" />
            </div>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Back
            </button>
            <button value="categories" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
              Submit
            </button>
          </div>
        </form>
        <form action="submit"></form>
      </div>
    );
  }
}
export default Form;
