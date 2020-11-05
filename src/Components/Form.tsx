import React, { Component } from 'react';
import '../App.css';

interface State {
  question: boolean;
  datastructure: boolean;
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
    question: true,
    categories: false,
    bigO: false,
    psuedoCode: false,
    algorithm: false,
    datastructure: true,
    code: false,
    pattern: false,
    array: false,
    hashTable: false,
    linkedList: false,
    tree: false,
    graph: false,
    stack: false,
    queue: false,
  };
  navigate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    let navArr = ['question', 'categories', 'bigO', 'psuedoCode'];
    let name: string = e.currentTarget.value;
    console.log(name, 'this is the target value');
    console.log(this.state, 'this is state');
    //@ts-ignore
    this.setState({ [name]: true });
    navArr = navArr.filter((nav) => nav !== name);
    //@ts-ignore
    navArr.forEach((nav) => this.setState({ [nav]: false }));
  };

  toggleFork = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    let datastructure = e.currentTarget.value;
    console.log(datastructure, 'this is the target value');
    //@ts-ignore
    this.setState({ [datastructure]: !this.state.datastructure });
  };

  render() {
    let questions: any[] = ['start'];

    // // v: React.ChangeEvent<HTMLInputElement>,
    const saveToLocalStorage = (e: any) => {
      questions.push(e);
      console.log(questions);
      localStorage.setItem('questions', JSON.stringify(questions));
    };

    console.log(this.state);
    const dataStructures: string[] = ['array', 'hashTable', 'linkedList', 'tree', 'graph', 'stack', 'queue'];
    const AlgorithmTypes: string[] = ['sorting', 'searching', 'counting', 'bubble'];
    const patterns: string[] = ['divide & conquer', 'sliding window', 'frequencey counter', 'multiple pointers'];
    const { question, datastructure, pattern, psuedoCode, bigO, algorithm, toggleFork, code } = this.state;
    return (
      <>
        <div className="container">
          <form action="/register" method="POST" className="form">
            {/* page1 */}
            {question ? (
              <>
                <div>
                  Add Question
                  <div className="form-group" id="name">
                    <textarea
                      rows={10}
                      name="Username"
                      id="quest"
                      className="form-control"
                      placeholder="question"
                      onBlur={(ev: React.ChangeEvent<HTMLTextAreaElement>) => saveToLocalStorage(ev.target.value)}
                    />
                    <div>
                      <button
                        value="categories"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  {datastructure ? (
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
                                onClick={(e) => toggleFork(e)}
                              />
                              <label htmlFor={type} id="checkbox-option">
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {algorithm ? (
                    <div>
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
                                onClick={(e) => toggleFork(e)}
                              />
                              <label htmlFor={type} id="checkbox-option">
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {pattern ? (
                    <div>
                      Identify Problem Solving Pattern
                      <div className="data-btn-container">
                        <div className="data-group" id="phone-inp">
                          {patterns.map((type, i) => (
                            <div key={i} className="btn">
                              <input
                                type="checkbox"
                                id={type}
                                name={type}
                                value={type}
                                hidden
                                onClick={(e) => toggleFork(e)}
                              />
                              <label htmlFor={type} id="checkbox-option">
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button value="question" type="submit" className="btn-submit " onClick={(e) => this.navigate(e)}>
                        Back
                      </button>
                      <button
                        value="psuedoCode"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Next
                      </button>
                    </div>
                  ) : null}
                  {psuedoCode ? (
                    <div>
                      Pseudocode
                      <div className="form-group" id="name">
                        <textarea
                          rows={10}
                          name="Username"
                          id="username"
                          className="form-control"
                          placeholder="question"
                        />
                      </div>
                      <button
                        value="categories"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Back
                      </button>
                      <button
                        value="categories"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Next
                      </button>
                    </div>
                  ) : null}
                  {code ? (
                    <div>
                      Code
                      <div className="form-group" id="name">
                        <textarea
                          rows={10}
                          name="Username"
                          id="username"
                          className="form-control"
                          placeholder="question"
                        />
                      </div>
                      <button
                        value="categories"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Back
                      </button>
                      <button
                        value="categories"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Next
                      </button>
                    </div>
                  ) : null}
                  {bigO ? (
                    <div>
                      Big O
                      <div className="form-group" id="name">
                        <input name="Username" id="username" className="form-control" placeholder="Time" />
                        <input name="Username" id="username" className="form-control" placeholder="Space" />
                      </div>
                      <button
                        value="categories"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Back
                      </button>
                      <button
                        value="categories"
                        type="submit"
                        className="btn-submit "
                        onClick={(e) => this.navigate(e)}
                      >
                        Submit
                      </button>
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}
          </form>
          <form action="submit"></form>
        </div>
      </>
    );
  }
}
export default Form;
