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
      queue: [["", "Laddar Kö"]] //Default empty state
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
          queue: res.data.queue
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

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