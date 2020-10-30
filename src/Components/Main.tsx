import React, { Component } from 'react';
import '../App.css';
import AlgoSingle from './AlgoSingle';

// export interface queryParams extends dropdownState{
//   query: string;
//   stars: string;
//   fork: boolean;
//   loading: boolean;
//   license: string
// }

// export interface State extends queryParams {
//   isLoaded: boolean;
//   data?: RepoItem[];
//   name: string;
//   owner: string;
//   html_url: string;
//   description: string;
//   invalidInput: boolean;
//   licenseList: [],
//   icon: string
// }
//<{}, State>
class Main extends Component<{}> {
  // state: any = {
  //   isLoaded: false,
  //   loading: false,
  //   data: [],
  //   fork: false,
  //   query: "",
  //   stars: "",
  //   license: "",
  //   name: "",
  //   owner: "",
  //   html_url: "",
  //   description: "",
  //   invalidInput: false,
  //   licenseList: ["", "MIT", "ISC", "apache-2.0", "gpl"],
  //   selectedLicense: "",
  //   icon: ""
  // };
  render() {
    return (
      <>
        <div>Show list</div>
        <div className="flex">
          <AlgoSingle />
          <AlgoSingle />
          <AlgoSingle />
        </div>
      </>
    );
  }
}

export default Main;
