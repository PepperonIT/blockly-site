import React, { Component } from "react";

class QueueComponent extends Component {
  state = {
    queue_items: ["List Item 1", "List Item 2", "List Item 3"]
  };

  render() {
    return (
      <React.Fragment>
        <ul>
            {this.state.queue_items.map(listitem => (
              <li>
                 {listitem}
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default QueueComponent;