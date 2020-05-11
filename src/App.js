import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import MessageBox from "./components/messagebox";
import Tweets from "./components/tweets";
import { postTweet } from "./lib/api";
import { getTweet } from "./lib/api";
import Profile from "./components/profile";

class Blogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      error: false,
      dataError: "",
      statusError: "",
      userName: "",
    };
    this.updateState = this.updateState.bind(this);
    this.setUserName = this.setUserName.bind(this);
  }

  componentDidMount() {
    this.fetchTweets().then();
  }

  async fetchTweets() {
    this.setState({ loading: true });
    const response = await getTweet();
    const objectTweets = response.data.tweets;
    if (objectTweets == null) {
      this.setState({ tweets: [], loading: false });
    } else {
      this.setState({
        tweets: objectTweets,
        loading: false,
      });
    }
  }

  showErrorMessage(data, status) {
    this.setState({ error: true, dataError: data, statusError: status });
  }
  hideErrorMessage() {
    this.setState({ error: false, dataError: "", statusError: "" });
  }
  setUserName(userName) {
    console.log(userName);
    this.setState({ userName: userName });
  }

  updateState = (wholeTweet) => {
    let { tweets } = this.state;
    tweets.unshift(wholeTweet);
    this.setState({
      tweets: tweets,
    });
    let postingTweet = { tweet: wholeTweet };
    postTweet(
      postingTweet,
      this.showErrorMessage.bind(this),
      this.hideErrorMessage.bind(this)
    );
  };

  render() {
    const {
      loading,
      tweets,
      error,
      dataError,
      statusError,
      userName,
    } = this.state;

    return (
      <Router>
        <div className="mainApp">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 offset-2">
                <nav className="container">
                  <NavLink
                    style={{
                      textDecoration: "none",
                      padding: 40,
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: 14,
                      lineHeight: 16,
                    }}
                    activeStyle={{ color: "white" }}
                    to="/home"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: 14,
                      lineHeight: 16,
                    }}
                    to="/profile"
                    activeStyle={{ color: "white" }}
                  >
                    Profile
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/home">
              {error && (
                <h5 className="errorMessage">
                  Error {statusError}, {dataError}
                </h5>
              )}
              <MessageBox callbackFC={this.updateState} userName={userName} />
              {loading && <h5 className="loadingMessage">Loading...</h5>}

              {tweets.map((element, index) => {
                return <Tweets key={index} tweet={element} />;
              })}
            </Route>
            <Route path="/profile">
              <Profile callUserName={this.setUserName} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Blogger;
