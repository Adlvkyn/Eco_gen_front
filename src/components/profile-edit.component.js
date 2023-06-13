import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import '../styles/profileEdit.css';

export default class ProfileEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" },
            showPassword: false,
            password: ''
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
            <div>
                <div className="container">
                    <h1>Редактировать профиль</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div className="text-center">
                                <img width={170} height={180} src="img/nurgissaImg.jpg" className="avatar img-circle" alt="avatar" />
                                <h6>Загрузите фотографию</h6>
                                <div class="form-group">
                                    <input type="file" name="file" id="file" class="input-file" />
                                    <label id="fileupl" for="file" class="btn btn-tertiary js-labelFile">
                                        <span class="js-fileName">Выберите файл</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 personal-info">
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Имя</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" type="text" defaultValue={currentUser.username} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Фамилия</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" type="text" defaultValue="Bishop" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-3 control-label">Email</label>
                                    <div className="col-lg-8">
                                        <input className="form-control" type="text" defaultValue={currentUser.email} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Ник</label>
                                    <div className="col-md-8">
                                        <input className="form-control" type="text" defaultValue={currentUser.username} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Пароль</label>
                                    <div className="col-md-8">
                                    <input className="form-control" type="password" defaultValue="11111122333" />   
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label">Повтор пароля</label>
                                    <div className="col-md-8">
                                        <input className="form-control" type="password" defaultValue="11111122333" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-3 control-label"></label>
                                    <div className="col-md-8">
                                        <input type="button" className="btn btn-submit" value="Сохранить" />
                                        <span></span>
                                        <input type="reset" className="btn btn-default" value="Отмена" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
