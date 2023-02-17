import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import { withRouter } from '../common/with-router';

const required = value => {
  if (value.length>6 || value.length<6) {
    return (
      <div className="alert alert-danger" role="alert">
       Вы должны ввести 6 цифр
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Ваш пароль должен быть от 6 до 20 символов.
      </div>
    );
  }
};


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onConfirmPass = this.onConfirmPass.bind(this);
    
        this.state = {
          email: "",
          newpassword: "",
          loading: false,
          message: "",
          send:1,
          number:"",
          confirmpassword:"",
          showPassword: false
        
        };

    
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }

      onChangeNumber(e) {     
        this.setState({
          number: e.target.value
        });
       
      }

      onConfirmPass(e) {     
        this.setState({
          confirmpassword: e.target.value
        });
       
      }
  
      onChangePassword(e) {
        this.setState({
          newpassword: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.sendNumbers(this.state.email).then(
            () => {
              // this.props.router.navigate("/checkNumbers");
              // window.location.reload();
              this.setState({
                send:2,
                loading:false
              });
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage,
                send:1
              });
            }
          );
        } else {
          this.setState({
            loading: false,
            send:1
          });
        }
      }


      handleNumbers(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.checkNumbers(this.state.number).then(
            () => {
            
              this.setState({
                send:3,
                loading:false
              });
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage,
                send:2
              });
            }
          );
        } else {
          this.setState({
            loading: false,
            send:2
          });
        }
      }

      handlePassword(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          if (this.state.newpassword === this.state.confirmpassword){
          AuthService.changePassword(this.state.confirmpassword, this.state.email).then(
            () => {
              this.props.router.navigate("/login");
              window.location.reload();
            },

            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage,
                send:3
              });
            }
          );}
          else{
            this.setState({
              loading: false,
              message: "Пароли не совпадают",
              send:3
            });
          }

        } else {
          this.setState({
            loading: false,
            send:3
          });
        }
      }
    
      
      render() {
        
        if (this.state.send===1) {
        return (
           <div className="col-md-12">
            <div className="card1 card-container">
              <h4>Сброс пароля</h4>
              <h6>Введите почтовый адрес от вашего аккаунта, на который будет выслан код подтверждения</h6>
              <Form
                onSubmit={this.handleLogin}
                ref={c => {
                  this.form = c;
                }}
              >
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                
                />
                   
                </div>
    
                <div className="form-group">
                  <button
                    className="btn btn-success btn-block"
                    disabled={this.state.loading}
                   // onClick={() => this.setState({ send: 2 })}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Отправить</span>
                    
                  </button>
                </div>
    
                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
    
              </Form>
            </div>
          </div>
        );}

       else if (this.state.send===2) {return (
          <div className="col-md-12">
          <div className="card1 card-container">
            <h4>Код подтверждения</h4>
            <h6>Введите код подтверждения.Например: 123456</h6>
            <Form
               onSubmit={this.handleNumbers}
              ref={c => {
                this.form = c;
              }}
            >
              <div className="form-group">
  
              <Input
                    type="text"
                    className="form-control"
                    name="number"
                    value={this.state.number}
                    onChange={this.onChangeNumber}
                    validations={[required]}
                  />
            
              </div>
  
              <div className="form-group">
                <button
                  className="btn btn-success btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Отправить</span>
                  
                </button>
              </div>
  
              {this.state.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {this.state.message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c;
                }}
              />
  
            </Form>
          </div>
        </div>
        );
      }

      else return (
        <div className="col-md-12">
        <div className="card1 card-container">
          <h3>Смена пароля</h3>
          <Form
            onSubmit={this.handlePassword}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="newpassword">Введите новый пароль</label>
              <Input
                type={ "text"} 
                className="form-control"
                name="newpassword"
                value={this.state.newpassword}
                onChange={this.onChangePassword}
                validations={[vpassword]}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >
                //       {values.showPassword ? <Visibility /> : <VisibilityOff />}
                //     </IconButton>
                //   </InputAdornment>
                //   }
              />
            
            </div>

            <div className="form-group">
              <label htmlFor="confirmpassword">Повторите новый пароль</label>
              <Input
                type="password"
                className="form-control"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.onConfirmPass}
                validations={[vpassword]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-success btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Сменить пароль</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            </Form>
        </div>
      </div>
      );
      }
      }
    

    
    export default withRouter(ForgotPassword);