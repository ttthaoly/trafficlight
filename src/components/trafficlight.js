import React from "react";
// import ReactDOM from "react-dom/client";
import "./trafficlight.css";
//-----------------------------------

class Trafficlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: {
        backgroundColor: "gray",
      },
      yellow: {
        backgroundColor: "gray",
      },
      green: {
        backgroundColor: "gray",
      },
      next: "red",
      mode: "ON",
      time: 0,
    };
  }

  //--------------------------------------
  handleChange = () => {
    switch (this.state.next) {
      case "red":
        this.setState({
          red: { backgroundColor: "red" },
          yellow: { backgroundColor: "gray" },
          next: "green",
          time: 4000,
        });
        break;
      case "green":
        this.setState({
          red: { backgroundColor: "gray" },
          green: { backgroundColor: "green" },
          next: "yellow",
          time: 3000,
        });
        break;
      case "yellow":
        this.setState({
          yellow: { backgroundColor: "yellow" },
          green: { backgroundColor: "gray" },
          next: "red",
          time: 2000,
        });
        break;
      default:
        break;
    }
  };

  handleClick = () => {
    if (this.state.mode === "ON") {
      this.setState({
        mode: "OFF",
      });
    } else {
      this.setState({
        red: {
          backgroundColor: "gray",
        },
        yellow: {
          backgroundColor: "gray",
        },
        green: {
          backgroundColor: "gray",
        },
        next: "red",
        mode: "ON",
        time: 0,
      });
    }
  };

  componentDidUpdate() {
    const { mode, time } = this.state;
    if (mode === "OFF") {
      this.timeOut = setTimeout(() => {
        this.handleChange();
      }, time);
    } else {
      clearTimeout(this.timeOut);
    }
  }

  //------------------------------------
  render() {
    return (
      <div className='container'>
        <div className='traffic-light'>
          <div className='signals'>
            <div className='red-light' style={this.state.red}></div>
            <div className='yellow-light' style={this.state.yellow}></div>
            <div className='green-light' style={this.state.green}></div>
          </div>
          <div className='button' onClick={this.handleClick}>
            <button>{this.state.mode}</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Trafficlight;