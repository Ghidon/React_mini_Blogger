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
    let { callbackFC } = this.props;
    callbackFC(this.state.textValue);
    this.setState({ textValue: "" });
    this.setState({ buttonOff: false });
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
              rows="6"
              maxLength="140"
              placeholder="What is in your mind..."
            ></textarea>
            {button}
            {/*             
            {
              <button
                className="messageBoxButton"
                disabled
                onClick={this.submitToParent}
              >
                Tweet
              </button>
            }
            else
            {
              <button
                className="messageBoxButton"
                onClick={this.submitToParent}
              >
                Tweet
              </button>
            } */}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBox;
