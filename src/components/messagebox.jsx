import React from "react";
import "./messagebox.css";

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitToParent = this.submitToParent.bind(this);
  }

  handleChange = (event) => {
    this.setState({ textValue: event.target.value });
  };

  submitToParent = () => {
    let { callbackFC } = this.props;
    callbackFC(this.state.textValue);
    this.setState({ textValue: "" });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 offset-3 messageBox">
            {/* <form> */}
            {/* <input
              type="text"
              onChange={(event) => props.onFormSubmit(event.target.name)}
            /> */}
            <textarea
              // onSubmit={(event) => this.props.onFormSubmit(event.target.value)}
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
            <button className="messageBoxButton" onClick={this.submitToParent}>
              Tweet
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBox;
