import React from "react";
import "./messagebox.css";

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      buttonOff: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitToParent = this.submitToParent.bind(this);
  }

  handleChange = (event) => {
    this.setState({ textValue: event.target.value });
    let length = event.target.value.length;
    if (length === 140) {
      this.setState({ buttonOff: true });
    } else {
      this.setState({ buttonOff: false });
    }
  };

  submitToParent = () => {
    let tweet = {
      content: this.state.textValue,
      userName: "Yoda",
      date: new Date().toISOString(),
    };
    let { callbackFC } = this.props;
    callbackFC(tweet);
    this.setState({ textValue: "" });
  };

  render() {
    const buttonOff = this.state.buttonOff;
    let button;
    if (buttonOff) {
      button = (
        <button
          className="btn btn-primary messageBoxButton disabled"
          disabled
          onClick={this.submitToParent}
        >
          Tweet
        </button>
      );
    } else {
      button = (
        <button
          className="btn btn-primary messageBoxButton "
          onClick={this.submitToParent}
        >
          Tweet
        </button>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 offset-4 messageBox">
            <textarea
              value={this.state.textValue}
              onChange={this.handleChange}
              className="inputBox"
              name="messagebox"
              id="message-box"
              cols="75"
              rows="5"
              maxLength="140"
              placeholder="What is in your mind..."
            ></textarea>
            <span
              className="error-message"
              style={{
                visibility:
                  this.state.buttonOff === true ? "visible" : "hidden",
              }}
            >
              Can't allow more than 140 characters
            </span>
            {button}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBox;
