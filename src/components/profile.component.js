import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import '../styles/profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
          <div>
            <div className="content">
              <img width={170} height={180} src="https://pro-cdn.pixelmator.com/community/avatar_empty@2x.png" alt="profileAvatar" />
              
              <div>
                <div className="username">
                {currentUser.username}
                </div>
                <div className="emailInfo">
                <img width={25} height={25} src="img/email.png" alt="emailIcon" />{currentUser.email}
                </div>
              </div>
              <div className="editProfile">
                <span>Редактировать профиль</span>
              </div>
            </div>
          </div> : null}
      </div>
    );
  }
}
