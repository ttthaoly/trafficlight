import React from "react";
// import ReactDOM from "react-dom/client";
import "./trafficlight.css";
//-----------------------------------

class Trafficlight extends React.Component {
  constructor(props) {
	  super(props);
	  this.state = {
      red: {
        backgroundColor: "gray"
      },
      yellow: {
        backgroundColor: "gray"
      },
      green: {
        backgroundColor: "gray"
      }
	  };
  }

//--------------------------------------
handleClick = () => {
  this.intervalId = setInterval(() => {
    setTimeout(() => {
      this.setState(() => {
        return {
          red: {backgroundColor: "red"},
          yellow: {backgroundColor: "gray"},
          green: {backgroundColor: "gray"}
        }
      })
    }, 2000)
    setTimeout(() => {
      this.setState(() => {
        return {
          red: {backgroundColor: "gray"},
          yellow: {backgroundColor: "gray"},
          green: {backgroundColor: "green"}
        }
      })
    }, 5000)
    setTimeout(() => {
      this.setState(() => {
        return {
          red: {backgroundColor: "gray"},
          yellow: {backgroundColor: "yellow"},
          green: {backgroundColor: "gray"}
        }
      })
    }, 8000)  
  }, 15000);
}

  //------------------------------------
render() {
	return (
    <div className="container">
      <div className="traffic-light">
        <div className="signals">
          <div className="red-light" style={this.state.red}></div>
          <div className="yellow-light" style={this.state.yellow}></div>
          <div className="green-light" style={this.state.green}></div>
        </div>
        <div className="button" onClick = {this.handleClick} >
          <button>On</button>
        </div>
      </div>
   </div>
	);
  }
}
export default Trafficlight;
