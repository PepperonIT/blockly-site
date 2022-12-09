import React, { Component } from "react";
import "./QueueComponent.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import BlocklyPy from "blockly/python";
import Blockly from "blockly/core";
import "../blockly/BlocklyComponent"
import { useEffect, useRef } from "react";
import BlocklyComponent, { ws } from "../blockly/BlocklyComponent";


class QueueComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      queue: [["", "Laddar Kö"]], //Default empty state
      isPaused: false
    }
    
  }

  cookies = new Cookies();

  /**
   * Updates the queue with a call to the server
   */
  updateQueue() {
    const myIP = "localhost"; // Only use localhost if site is running on dev-machine ONLY. Otherwise use full IP! Remember to open ports!
    
    axios
      .get(`http://${myIP}:5000/queue`)
      .then((res) => {
        this.setState(() => ({
          queue: res.data.queue,
          isPaused: res.data.paused,
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  /**
   * @summary Send a delete request to the server for a specific id
   * 
   * @param id The id of the item to be deleted from the queue
   */
  deleteQueueItem(id) {
    const myIP = "localhost";

    axios
      .delete(`http://${myIP}:5000/remove?pid=${id}`)
      .then((res) => {
        this.codeDeleteSuccess()
      })
      .catch((err) => {
        //console.log(err);
      })
  }

  /**
   * @summary Displays confirmation window for deleting item from queue
   * 
   * @param id The id of the item to be deleted from the queue 
   */
  codeDeleteConfirmation(id)  {
    confirmAlert({
      title: "Är du säker på att du vill ta bort programmet från kön?",
      buttons: [
        {
          label: "Ja",
          onClick: () => {
            this.deleteQueueItem(id)
          }
        },
        {
          label: "Nej",
        }
      ],
    });
  };

  /**
   * @summary Displays success message upon item deletion
   */
  codeDeleteSuccess() {
    confirmAlert({
      title: "Koden togs bort från kön",
      buttons: [
        {
          label: "Okej",
        }
      ],
    });
  }

  /**
   * @summary Sends a put request to the server to edit an item
   * 
   * @param id The id of the item to be edited in the queue 
   */
  editQueueItem(id) {
    const myIP = "localhost";

    var code = BlocklyPy.workspaceToCode(ws);

    console.log(code);

    axios
      .put(`http://${myIP}:5000/edit?pid=${id}`, code, {
        headers: { "Content-Type": "text/plain" },
      })
      .then((res) => {
        this.codeEditSuccess()
      })
      .catch((err) => {
        //console.log(err);
      })
  }

  /**
   * @summary Displays confirmation window for editing item in the queue
   * 
   * @param The id of the item to be edited in the queue
   */
  codeEditConfirmation(id)  {
    confirmAlert({
      title: "Är du säker på att du vill ändra programmet i kön?",
      buttons: [
        {
          label: "Ja",
          onClick: () => {
            this.editQueueItem(id)
          }
        },
        {
          label: "Nej",
        }
      ],
    });
  };


  /**
   * @summary Displays success message upon code edit
   */
  codeEditSuccess() {
    confirmAlert({
      title: "Din kod i kön har ändrats!",
      buttons: [
        {
          label: "Okej",
        }
      ],
    });
  }

  /**
   * @summary Prints corresponding message for queue pause button
   * 
   * @param pauseState The state representing whether the queue is paused or not.
   * 
   * @returns String
   */
  pausePrinting(pauseState) {
    console.log(pauseState)

    if (pauseState) {
      return "Starta Kö";
    } else {
      return "Pausa Kö";
    }
  }

  /**
   * @summary sends a post request to either pause or play the queue
   * 
   * @param pauseState The state representing whether the queue is paused or not.
   */
  pausePlayQueue(pauseState) {
    const myIP = "localhost";

    if (pauseState) {
      //Start the queue

      axios
      .post(`http://${myIP}:5000/unpause`)
      .then((res) => {
        this.setState(() => ({
          isPaused: res.data.paused,
        }));
      })
      .catch((err) => {
        console.error(err);
      });
    } else {
      //pause the queue

      axios
      .post(`http://${myIP}:5000/pause`)
      .then((res) => {
        this.setState(() => ({
          isPaused: res.data.paused,
        }));
      })
      .catch((err) => {
        console.error(err);
      });
    }
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

  /**
   * @summary Renders the component
   * 
   * @returns React Fragment containing the html to render
   */
  render() {
    return (
      <React.Fragment>
        <ul>
            <li>
              {this.cookies.get("nickname") === "admin" &&
                <span className="c" onClick={() => this.pausePlayQueue(this.state.isPaused)}>
                {this.pausePrinting(this.state.isPaused)}
              </span>
              }
            <h1>
            Kö
            <hr className="solid"></hr>
            </h1></li>
            {this.state.queue.map((item, index) => ( //Hack solution. Should probably be refactored later.
              <li>
              <span className="b">
                {this.state.queue[index][1]}
                {this.cookies.get("nickname") === "admin" && // admin check
                  <button className="deletebutton" onClick={() => this.codeDeleteConfirmation(this.state.queue[index][0])}>x</button>
                }
                {this.cookies.get("nickname") === this.state.queue[index][1] &&
                  <button className="editbutton" onClick={() => this.codeEditConfirmation(this.state.queue[index][0])}>Ändra</button>
                }
                {this.cookies.get("nickname") === "admin" &&
                  <button className="editbutton" onClick={() => this.codeEditConfirmation(this.state.queue[index][0])}>Ändra</button>
                }
              </span>
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default QueueComponent;