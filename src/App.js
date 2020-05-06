import React from "react";
import "./App.css";
import MessageBox from "./components/messagebox";

class Blogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      tweets: [],
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState = (text) => {
    console.log("receiving text", text);
    let { tweets } = this.state;
    tweets.push(text);
    this.setState({
      tweets: tweets,
    });
  };

  render() {
    console.log(this.state.tweets);
    const { text } = this.state;
    return (
      <div className="mainApp">
        <MessageBox callbackFC={this.updateState} />
      </div>
    );
  }
}

export default Blogger;
