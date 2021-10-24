import React from "react";
import { render } from "react-dom";
import WebRouter from "./WebRouter";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
  }
    
  render() {
    /* WebRouter*/
    return( 
      <div>
          <WebRouter />
      </div>
    );
  }
}
  

const appDiv = document.getElementById("app");
render(<App />, appDiv);
