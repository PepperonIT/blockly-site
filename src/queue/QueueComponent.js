import React, { Component } from "react";
import { Value } from "../blockly";
import "./QueueComponent.css";

class QueueComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testDigit: [1, 2, 3]
    }
  }

  componentDidMount = () => {
    this.myTimer = setInterval(() => {
      this.setState((prevState) => ({
        testDigit: prevState.testDigit.map(value => value + 1) //Testing placeholder
      }));
    }, 1000) //Update interval
  }

  componentWillUnmount = () => {
    clearInterval(this.myTimer);
  }

  //state = {
    //queue_items: ["List Item 1", "List Item 2", "List Item 3"]
  //};

  render() {
    return (
      <React.Fragment>
        <ul>
            <li><h1>
            Kö
            <hr class="solid"></hr>
            </h1></li>
            {this.state.testDigit.map(listitem => (
              <li>
                 <span class="b">
                 {listitem}
                 </span>
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default QueueComponent;