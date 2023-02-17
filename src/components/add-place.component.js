import React, { Component } from "react";
import PlaceDataService from "../services/crud.service";
// import { useHistory } from "react-router-dom";


export default class AddPlace extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.savePlace = this.savePlace.bind(this);
    this.newPlace = this.newPlace.bind(this);

    this.state = {
      id: null,
      name: "",
      address: "",
      worked: false,
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

  savePlace() {
    var data = {
      name: this.state.name,
      address: this.state.address
    };

    PlaceDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          worked: response.data.worked,

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
      worked: false,

      submitted: false
    });
  }

  onClick = () => this.props.history.push("/places");

  render() {
    

    return (
      <div className="submit-form">
        {this.state.submitted ? (
          
           <div className="card1 card-container1">
             <div class="row justify-content-center" style={{ margin: 0 }}>
            <h5>Вы успешно добавили новый адрес.<br/> Что вы хотите сделать дальше?</h5>
            <button className="btn btn-success" onClick={this.newPlace}>
              Добавить еще
            </button>

            <button className="btn btn-primary" onClick={this.onClick}>
              Вернуться в общий список
            </button>
          </div>
          </div>
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

              <select class="custom-select" id="inputGroupSelect04">
                <option value="ALATAU">Алатауский</option>
                <option value="ALMALY">Алмалиский</option>
                <option value="AUEZOV">Ауэзовский</option>
                <option value="BOSTANDYK">Бостандыкский</option>
                <option value="ZHETYSU">Жетысуйский</option>
                <option value="MEDEU">Медеуский</option>
                <option value="NAURYZBAY">Наурызбауский</option>
                <option value="TURKSIB">Турксибский</option>
              </select>

              <label className="form-group">Работает ли точка?</label>

              <select class="custom-select" id="inputGroupSelect04">
                <option value='true'>Да</option>
                <option value='false'>Нет</option>
              </select>


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