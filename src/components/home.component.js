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
            <h2>Сделай свою жизнь</h2>
            <h2>экологичней уже сейчас!</h2>
            <div className="button">
              <a href="/register">
                Присоединиться
              </a>
            </div>
          </div>
          <div className="aboutUs" >
            <h2 id="about">О нас</h2>
            <p > Eco-generation это платформа разработанная для понятного процесса сдачи на переработку. Мы верим, что каждый человек может сделать свой вклад в защиту окружающей среды и уменьшить негативное влияние нашей деятельности на планету. Присоединяйтесь к нашему сообществу и вместе мы сможем сделать мир чище и здоровее для нас и наших будущих поколений.</p>
            <div style={{ display: 'flex' }}>
            <img  src="img/AppStore2.jpg" alt="" style={{height:200 }}></img>
          <img src="img/QR.png" alt="" style={{height:200,paddingLeft:20}}></img>
            </div>
            
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
          <div className="partners">
          <h2 >Наши партнеры</h2>
          <img src="img/partners1.png" alt="" style={{width:1000 }}></img>
          </div>
        </div>
      </div>
    );
  }
}
