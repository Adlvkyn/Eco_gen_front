import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import Service from "../services/auth.service";
import '../styles/home.css';

export default class QR extends Component {
  constructor(props) {
    super(props);
    this.onChangePaper = this.onChangePaper.bind(this);
    this.onChangePlastic = this.onChangePlastic.bind(this);
    this.onChangeGlass = this.onChangeGlass.bind(this);
    this.onChangeTin = this.onChangeTin.bind(this);
    this.createQR = this.createQR.bind(this);

    this.state = {
      paper: 0.0,
      plastic: 0.0,
      tin: 0.0,
      glass: 0.0,
      loading: false,
      data1: null
    };
  }

  onChangePaper(e) {
    this.setState({
      paper: e.target.value
    });
  }

  onChangePlastic(e) {
    this.setState({
      plastic: e.target.value
    });
  }

  onChangeGlass(e) {
    this.setState({
      glass: e.target.value
    });
  }

  onChangeTin(e) {
    this.setState({
      tin: e.target.value
    });
  }

  createQR(e) {
    const user = Service.getCurrentUser();
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      Service.createQR(this.state.paper, this.state.glass,
        this.state.plastic,
        this.state.tin, user.id).then((response) => {
          this.setState({
            loading: false,
            data1: response
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
            });
          }
        );
    } else {
      this.setState({
        loading: false,

      });
    }
  }
  render() {
    const { data1 } = this.state;
    return (
      <div class="row justify-content-center" style={{ margin: 0 }}>
        <div className="col-md-auto">
          <div className="card1 card-container">
            <Form
              onSubmit={this.createQR}
              ref={c => {
                this.form = c;
              }}
            >
              <div class="form-group">

                <h4>Генерация QR кода</h4>
                <h6>Введите поочередно количество в кг</h6>
                <label htmlFor="paper">Бумага (кг)</label>
                <input type="number"
                  value={this.state.paper}
                  step="0.01"
                  name="paper"
                  min="0.0"
                  id="typeNumber"
                  class="form-control"
                  onChange={this.onChangePaper} />

                <label htmlFor="plastic">Пластик (кг)</label>
                <input type="number"
                  value={this.state.plastic}
                  step="0.01"
                  name="plastic"
                  min="0.0"
                  id="typeNumber"
                  class="form-control"
                  onChange={this.onChangePlastic} />


                <label htmlFor="glass">Стекло (кг)</label>
                <input type="number"
                  value={this.state.glass}
                  step="0.01"
                  min="0.0"
                  name="glass"
                  id="typeNumber"
                  class="form-control"
                  onChange={this.onChangeGlass} />


                <label htmlFor="tin">Метал (кг)</label>
                <input type="number"
                  value={this.state.tin}
                  min="0.0"
                  step="0.01"
                  name="tin"
                  id="typeNumber"
                  class="form-control"
                  onChange={this.onChangeTin} />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-success btn-block"
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Создать QR</span>
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

        <div className="col-md-auto justify-content-center">
          <div className="card1 card-container1">

            <img src={data1} alt="" style={{ margin: 'auto' }}></img>
          </div>
        </div>
      </div>
    );
  }
}
