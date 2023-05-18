import React, { Component } from "react";
import PlaceDataService from "../services/crud.service";
import { withRouter } from '../common/with-router';

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

    this.setState(function(prevState) {
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
      <div>
        {currentPlace ? (
          <div className="edit-form">
            <h4>Place</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentPlace.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentPlace.address}
                  onChange={this.onChangeAddress}
                />
              </div>

              <div className="form-group">
              <label htmlFor="status">Status</label>
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
                className="badge badge-primary mr-2"
                onClick={() => this.updateWorked(false)}
              >
                Dont worked
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateWorked(true)}
              >
                Worked
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deletePlace}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatePlace}
            >
              Update
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