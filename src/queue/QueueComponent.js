import React, { Component } from "react";
import "./QueueComponent.css";
import axios from "axios";

class QueueComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queue: [["", ""]] //Default empty state
    }
  }

  /**
   * Updates the queue with a call to the server
   */
  updateQueue() {
    const myIP = "0.0.0.0"; // Only use localhost if site is running on dev-machine ONLY. Otherwise use full IP! Remember to open ports!
    var newQueue;
    
    axios
      .get(`http://${myIP}:5000/queue`)
      .then((res) => {
        this.setState(() => ({
          queue: res.data.queue
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  /**
   * Periodically calls the updateQueue method to ensure
   * that the queue is reasonably up to date
   */
  componentDidMount = () => {
    this.myTimer = setInterval(() => {
      this.updateQueue()
    }, 1000) //Update interval in ms
  }

  /**
   * Clears unmounted components to save memory
   */
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
            <hr className="solid"></hr>
            </h1></li>
            {this.state.queue.map((item, index) => ( //Hack solution. Should probably be refactored later.
              <li>
              <span className="b">
                {this.state.queue[index][1]}
              </span>
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default QueueComponent;