import React, { useState } from "react";
import "./profile.css";

const Profile = (props) => {
  const [userName, setUserName] = useState("");

  const handleOnUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const submitUserNameToParent = () => {
    let { callUserName } = props;
    callUserName(userName);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 offset-4 profile">
            <h2 className="title">Profile</h2>
            <span className="subtitle">User Name</span>
            <input
              type="text"
              value={userName}
              className="inputProfile"
              onChange={handleOnUserNameChange}
            ></input>
            <button
              className="btn btn-primary messageBoxButton "
              onClick={submitUserNameToParent}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
