import React, { Component } from "react";
import PlaceDataService from "../services/crud.service";
import { withRouter } from '../common/with-router';
import '../styles/placeEdit.css';

class Place extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.getPlace = this.getPlace.bind(this);
    this.updatePlace = this.updatePlace.bind(this);
    this.deletePlace = this.deletePlace.bind(this);

    this.state = {
      currentPlace: {
        id: null,
        name: "",
        address: "",
        worked: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getPlace(this.props.router.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentPlace: {
          ...prevState.currentPlace,
          name: name
        }
      };
    });
  }

  onChangeAddress(e) {
    const address = e.target.value;

    this.setState(prevState => ({
      currentPlace: {
        ...prevState.currentPlace,
        address: address
      }
    }));
  }

  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(prevState => ({
      currentPlace: {
        ...prevState.currentPlace,
        status: status
      }
    }));
  }

  getPlace(id) {
    PlaceDataService.get(id)
      .then(response => {
        this.setState({
          currentPlace: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateWorked(status) {
    var data = {
      id: this.state.currentPlace.id,
      name: this.state.currentPlace.name,
      address: this.state.currentPlace.address,
      worked: this.state.currentPlace.status
    };

    PlaceDataService.update(this.state.currentPlace.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentPlace: {
            ...prevState.currentPlace,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePlace() {
    PlaceDataService.update(
      this.state.currentPlace.id,
      this.state.currentPlace
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The place was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePlace() {
    PlaceDataService.delete(this.state.currentPlace.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/places');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentPlace } = this.state;

    return (
      <div className="content">
        {currentPlace ? (
          <div className="edit-form">
            <h4>Пункты</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Название</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentPlace.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentPlace.address}
                  onChange={this.onChangeAddress}
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Время работы</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  value={currentPlace.status}
                  onChange={this.onChangeStatus}
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Район</label>
                <div id="region" class="regions input-group">
                  <select class="custom-select" value={this.selectedDistrict} onChange={e => this.setState({ selectedDistrict: e.target.value })} id="inputGroupSelect04">
                    <option value="Алатауский">Алатауский</option>
                    <option value="Алмалиский">Алмалиский</option>
                    <option value="Ауэзовский">Ауэзовский</option>
                    <option value="Бостандыкский">Бостандыкский</option>
                    <option value="Жетысуйский">Жетысуйский</option>
                    <option value="Медеуский">Медеуский</option>
                    <option value="Наурызбауский">Наурызбауский</option>
                    <option value="Турксибский">Турксибский</option>
                  </select>
                  <div class="input-group-append">
                    <button class="btn btn-outline-success" type="button" onClick={this.retrievePlaces1}>Выбрать</button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="status">Широта</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  value={currentPlace.status}
                  onChange={this.onChangeStatus}
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Долгота</label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  value={currentPlace.status}
                  onChange={this.onChangeStatus}
                />
              </div>
            </form>

            {currentPlace.worked ? (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updateWorked(false)}
              >
                Закрыто
              </button>
            ) : (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updateWorked(true)}
              >
                Открыто
              </button>
            )}

            <button
              className="btn btn-danger mr-2"
              onClick={this.deletePlace}
            >
              Удалить
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updatePlace}
            >
              Обновить
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Place...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Place);