import React from "react";
import "./App.css";
import MessageBox from "./components/messagebox";
import Tweets from "./components/tweets";
import { postTweet } from "./lib/api";
import { getTweet } from "./lib/api";

class Blogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      loading: false,
      error: false,
      dataError: "",
      statusError: "",
    };
    this.updateState = this.updateState.bind(this);
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

  updateState = (wholeTweet) => {
    let { tweets } = this.state;
    tweets.unshift(wholeTweet);
    this.setState({
      tweets: tweets,
    });
    let postingTweet = { tweet: wholeTweet };
    postTweet(postingTweet, this.showErrorMessage.bind(this));
  };

  render() {
    const { loading, tweets, error, dataError, statusError } = this.state;

    return (
      <div className="mainApp">
        {error && (
          <h5 className="errorMessage">
            Error {statusError}, {dataError}
          </h5>
        )}
        <MessageBox callbackFC={this.updateState} />
        {loading && <h5 className="loadingMessage">Loading...</h5>}

        {tweets.map((element, index) => {
          return <Tweets key={index} tweet={element} />;
        })}
      </div>
    );
  }
}

export default Blogger;
