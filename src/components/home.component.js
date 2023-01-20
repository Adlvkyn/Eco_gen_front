import React, { Component } from "react";

import UserService from "../services/user.service";
import '../styles/home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="join">
            <p>Сделай свою жизнь</p>
            <p>экологичней уже сейчас!</p>
            <div className="button">
              <a href="/register">
                Присоединиться
              </a>
            </div>
          </div>
          <div className="aboutUs" >
            <h2 id='about'>О нас</h2>
            <p > Eco-generation это платформа разработанная для понятного процесса сдачи на переработку. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur velit sit amet faucibus tincidunt. Praesent gravida rutrum est, vitae mollis ligula vestibulum ac. Ut eu dui fringilla, pharetra mi at, facilisis dolor. Pellentesque quam lacus, maximus a elementum rutrum, scelerisque vel mi. Praesent luctus ligula elit, sed</p>
          </div>
          <div className="solution">  
            <div className="solutionImg">
              <div><img src="img/bottleRecycle.png" alt="" /></div>
              <p>Соберите отходы</p>
            </div>
            <div className="solutionImg">
              <div><img src="img/places.png" alt="" /></div>
              <p>Сдайте в пунктах переработки</p>
            </div>  
            <div className="solutionImg">
              <div><img src="img/money.png" alt="" /></div>
              <p>Получайте баллы</p>
            </div> 
            <div className="solutionImg">
              <div><img src="img/upup.png" alt="" /></div>
              <p>Отслеживайте свой прогресс</p>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}
