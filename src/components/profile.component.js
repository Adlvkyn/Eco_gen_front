import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import '../styles/profile.css';
import { Link } from "react-router-dom";

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

    const users = [
      { id: 1, name: 'Tussupov', score: 698, image: 'img/user1.jpg' },
      { id: 2, name: 'Kiplon', score: 645, image: 'img/user2.jpg' },
      { id: 3, name: 'Toqayev007', score: 622, image: 'img/user3.jpg' },
      { id: 4, name: 'Jagat', score: 620, image: 'img/user4.png' },
      { id: 5, name: 'Master.01', score: 598, image: 'img/user5.jpeg' },
    ];

    return (
      <div className="container">
        {(this.state.userReady) ?
          <div>
            <div className="content">
              <div className="info">
                <div className="infoo">
                  <img width={170} height={180} src="img/nurgissaImg.jpg" alt="profileAvatar" />
                  <div className="infoText">
                    <div className="userInfo">
                      <div className="firstname">
                        <p>Nurgissa</p>
                      </div>
                      <div className="lastname">
                        <p>Adilakyn</p>
                      </div>
                    </div>
                    <div className="username">
                      <p>{currentUser.username}</p>
                    </div>
                    <div className="emailInfo">
                      <p>{currentUser.email}</p>
                    </div>

                    <div className="Stats">
                      <div className="bonus">
                        <img width={35} height={35} src="img/bonus.png" alt="bonusIcon" />
                        <p>Бонус: 3000 тг</p>
                      </div>
                      <div className="ratingg">
                        <img width={35} height={35} src="img/ranking.png" alt="rankingIcon" />
                        <p>Рейтинг: 46</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="editProfile">
                  <a style={{textDecoration: 'none'}} href={"/profileEdit"} className="ProfileEdit">
                    <span>Редактировать профиль</span>
                  </a>
                </div>
              </div>

              <div className="recycleStats">
                <p className="statsName">Статистика сдачи</p>
                <div className="recycleAmount">
                  <div className="plastic">
                    <img width={80} height={80} src="img/recycleIcons/plastic.png" alt="plastic" />
                    <p className="materialName">Plastic</p>
                    <p className="materialWeight">6 кг</p>
                  </div>
                  <div className="paper">
                    <img width={80} height={80} src="img/recycleIcons/paper.png" alt="paper" />
                    <p className="materialName">Paper</p>
                    <p className="materialWeight">13 кг</p>
                  </div>
                  <div className="metal">
                    <img width={80} height={80} src="img/recycleIcons/metal.png" alt="metal" />
                    <p className="materialName">Metal</p>
                    <p className="materialWeight">4 кг</p>
                  </div>
                  <div className="glass">
                    <img width={80} height={80} src="img/recycleIcons/glass.png" alt="glass" />
                    <p className="materialName">Glass</p>
                    <p className="materialWeight">10 кг</p>
                  </div>
                </div>
              </div>
              <div className="rating">
                <h1>Рейтинг пользователей</h1>
                {users.slice(0, 5).map((user) => (
                  <div className="user" key={user.id}>
                    <div className="place">{user.id}</div>
                    <img src={user.image} alt={user.name} className="user-image" />
                    <div className="username">{user.name}</div>
                    <div className="score">{user.score} очков</div>
                  </div>
                ))}
                <div className="your-rating">
                  <h2>Ваш рейтинг</h2>
                  <div className="user">
                    <div className="place">46</div>
                    <img src="img/nurgissaImg.jpg" alt="Ваш пользователь" className="user-image" />
                    <div className="username">Adlvkn</div>
                    <div className="score">276 очков</div>
                  </div>
                </div>
              </div>
            </div>
          </div> : null}
      </div>
    );
  }
}
