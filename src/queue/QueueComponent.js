import React, { Component } from "react";
import "./QueueComponent.css";

class QueueComponent extends Component {
  state = {
    queue_items: ["List Item 1", "List Item 2", "List Item 3"]
  };

  render() {
    return (
      <React.Fragment>
        <ul>
            <li><h1>
            Kö
            <hr class="solid"></hr>
            </h1></li>
            {this.state.queue_items.map(listitem => (
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