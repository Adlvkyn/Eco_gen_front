import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Link as Link2} from 'react-scroll';
import AuthService from "./services/auth.service";
import AddPlaces from "./components/add-place.component";
import Place from "./components/place.component";
import PlacesList from "./components/places-list.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Accrual from "./components/accrual.component";
import EcoAdvice from "./components/eco-advice.component";
import News from "./components/news.component";
import Forgot from "./components/forgot-password.component";
import Check from "./components/check-numbers.component.js";
import Map from "./components/map.component.js";
import QR from "./components/qr.component.js";


// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }



    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <div className="Wrapper">
                <div className="header">
                    <nav className="navbar navbar-expand navbar-custom ">
                        <Link to={"/home"} className="nav-link-logo">
                            <img
                                className="logoHeader"
                                src="img/EcoGenLogo.svg"
                                width="220"
                                height="80"
                                alt="brand"
                            />

                        </Link>
                        <div id="menu" className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link">
                                    <span>Главная</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                       
                                <Link2 to="about" spy={true} smooth="true" className="nav-link">
                                    <span>О нас</span>
                                </Link2>
                            </li>

                            <li class="nav-item dropdown">
                                <span className="nav-link">Еще<img className="dropdownImg" width={10} height={10} src="img/arrow-down-sign-to-navigate.png" /></span>
                                <div class="dropdown-content">
                                    <Link to={"/news"} className="nav-link">Новости</Link>
                                    <Link to={"/ecoAdvice"} className="nav-link">Эко Советы</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link">
                                    <span>Карта</span>
                                </Link>
                            </li>

                            {showModeratorBoard && (
                                <li className="nav-item">
                                    <Link to={"/mod"} className="nav-link">
                                        <span>Модератор панель</span>
                                    </Link>
                                </li>
                            )}

                            {showAdminBoard && (
                                <li class="nav-item dropdown">
                                    <span className="nav-link">Админ панель<img className="dropdownImg" width={10} height={10} src="img/arrow-down-sign-to-navigate.png" /></span>
                                    <div class="dropdown-content">
                                        <Link to={"/QR"} className="nav-link"><span>Сгенерировать QR</span></Link>
                                        <Link to={"/places"} className="nav-link"><span>Пункты приема</span></Link>
                                        <Link to={"/home"} className="nav-link"><span>Пользователи</span></Link>
                                        <Link to={"/accrual"} className="nav-link">Приход</Link>
                                    </div>
                                </li>
                            )}
                        </div>

                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link">
                                        <img src="img/userIcon.png"
                                            width="20"
                                            height="20"
                                            alt="userIcon" />
                                        <span>{currentUser.username}</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={this.logOut}>
                                        <span>Выйти</span>
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        <span>Вход</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        <span>Регистрация</span>
                                    </Link>
                                </li>
                            </div>
                        )}
                    </nav>
                </div>

                <div className="pageForAll">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/user" element={<BoardUser />} />
                        <Route path="/mod" element={<BoardModerator />} />
                        <Route path="/admin" element={<BoardAdmin />} />
                        <Route path="/add" element={<AddPlaces />} />
                        <Route path="/places" element={<PlacesList />} />
                        <Route path="/places/:id" element={<Place />} />
                        <Route path="/ecoAdvice" element={<EcoAdvice />} />
                        <Route path="/accrual" element={<Accrual />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/forgot" element={<Forgot />} />

                        <Route path="/QR" element={<QR />} />
                    </Routes>
                </div>

                <footer>
                    <div className="container">
                        <div className="footerTop">
                            <img
                                src="img/EcoGenLogo.svg"
                                width="220"
                                height="80"
                                alt="brand"
                            />
                            <div className="socialMedia">
                                <Link href="https://instagram.com/elfina75?igshid=YmMyMTA2M2Y=" >
                                    <img
                                        src="img/instagram.png"
                                        width="40"
                                        height="40"
                                        alt="brand"
                                    />
                                </Link>
                                <Link href="https://www.facebook.com/nurgisa.adilakyn" >
                                    <img
                                        src="img/facebook.png"
                                        width="40"
                                        height="40"
                                        alt="brand"
                                    />
                                </Link>
                                <Link href="https://www.linkedin.com/in/nurgissa-adilakyn-57b180252/" >
                                    <img
                                        src="img/linkedin.png"
                                        width="40"
                                        height="40"
                                        alt="brand"
                                    />
                                </Link>
                                <Link href="https://twitter.com/Nurgissa19" >
                                    <img
                                        src="img/twitter.png"
                                        width="40"
                                        height="40"
                                        alt="brand"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="footerBottom">
                            <div className="footerMenu">
                                <li className="nav-item">
                                    <Link to={"/home"} className="nav-link">
                                        Главная
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/home"} className="nav-link">
                                        Новости
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/home"} className="nav-link">
                                        Эко советы
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/home"} className="nav-link">
                                        О нас
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/map"} className="nav-link">
                                        Карта
                                    </Link>
                                </li>
                            </div>
                            <span>2022 Все права защищены</span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
