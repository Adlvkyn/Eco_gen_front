import React, { Component } from "react";
import PlaceDataService from "../services/crud.service";

import { Navigate } from "react-router-dom";


export default class AddPlace extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeWorked= this.onChangeWorked.bind(this);
    this.savePlace = this.savePlace.bind(this);
    this.newPlace = this.newPlace.bind(this);

    this.state = {
      id: null,
      name: "",
      address: "",
      worked: "",
      district: "",

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  onChangeWorked(e) {
    this.setState({
      worked: e.target.value
    });
  }


  savePlace() {
    var data = {
      name: this.state.name,
      address: this.state.address,
      worked: this.state.worked,
       district: this.state.district
    };

    PlaceDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          worked: response.data.worked,
           district: response.data.district,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPlace() {
    this.setState({
      id: null,
      name: "",
      address: "",
      worked: "",
      district:"",

      submitted: false
    });
  }


  onChangeDistrict = (event) => {
    this.setState({ district: event.target.value });
  }
  onClick = () => this.props.history.push("/places");

  render() {


    return (
      <div className="submit-form" style={{maxWidth: 650}}>
        {this.state.submitted ? (

          <Navigate to="/places" />
        ) : (
          <div class="row justify-content-center" style={{ margin: 0 }}>
            <div className="col-md-auto">
              <div className="card1 card-container" style={{ marginRight: 0 }}>
                <div className="form-group">
                  <label htmlFor="title">Название компании</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={this.state.name}
                    onChange={this.onChangeName}
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Адрес</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    name="address"
                  />
                </div>

                <label className="form-group">Район</label>

                <select class="custom-select" id="inputGroupSelect04" value={this.state.district} onChange={this.onChangeDistrict}>
                  <option value="Алатауский">Алатауский</option>
                  <option value="Алмалиский">Алмалиский</option>
                  <option value="Ауэзовский">Ауэзовский</option>
                  <option value="Бостандыкский">Бостандыкский</option>
                  <option value="Жетысуйский">Жетысуйский</option>
                  <option value="Медеуский">Медеуский</option>
                  <option value="Наурызбауский">Наурызбауский</option>
                  <option value="Турксибский">Турксибский</option>
                </select>

              

                <div className="form-group">
                  <label htmlFor="worked">Время работы</label>
                  <input
                    type="text"
                    className="form-control"
                    id="worked"
                    required
                    value={this.state.worked}
                    onChange={this.onChangeWorked}
                    name="worked"
                  />
                </div>


                <button onClick={this.savePlace} className="btn btn-success">
                  Добавить
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
} 