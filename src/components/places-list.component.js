import React, { Component, useState } from "react";
import PlaceDataService from "../services/crud.service";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import '../styles/places-list.css';




export default class PlacesList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.onChangeDistrict = this.onChangeDistrict.bind(this);
        this.retrievePlaces = this.retrievePlaces.bind(this);
        this.retrievePlaces1 = this.retrievePlaces1.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActivePlaces = this.setActivePlace.bind(this);
        this.removePlaces = this.removePlaces.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            places: [],
            currentPlace: null,
            currentIndex: -1,
            district: "",
            searchName: "",

            page: 1,
            count: 0,
            pageSize: 3,
        };
        this.pageSizes = [3, 6, 9];
    }
    
    componentDidMount() {
        this.retrievePlaces();
    }

    onChangeSearchName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    onChangeDistrict(e) {
        const district = e.target.value;

        this.setState({
            district: district
        });
    }

    getRequestParams(searchName, page, pageSize) {
        let params = {};

        if (searchName) {
            params["name"] = searchName;
        }

        if (page) {
            params["page"] = page - 1;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    }

  

    getRequestParams1(district, page, pageSize) {
        let params = {};

        if (district) {
            params["district"] = district;
        }

        if (page) {
            params["page"] = page - 1;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    }

    retrievePlaces() {
        const { searchName, page, pageSize } = this.state;
        const params = this.getRequestParams(searchName, page, pageSize);

        PlaceDataService.getAllPage(params)
            .then((response) => {
                const { places, totalPages } = response.data;

                this.setState({
                    places: places,
                    count: totalPages,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    retrievePlaces1() {

        const { district, page, pageSize } = this.state;
        const params = this.getRequestParams1(district, page, pageSize);

        PlaceDataService.getAllPage1(params)
            .then((response) => {
                const { places, totalPages } = response.data;

                this.setState({
                    places: places,
                    count: totalPages,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    handlePageChange(event, value) {
        this.setState(
            {
                page: value,
            },
            () => {
                this.retrievePlaces();
            }
        );
    }

    handlePageSizeChange(event) {
        this.setState(
            {
                pageSize: event.target.value,
                page: 1
            },
            () => {
                this.retrievePlaces();
            }
        );
    }

    refreshList() {
        this.retrievePlaces();
        this.setState({
            currentPlace: null,
            currentIndex: -1
        });
    }

    setActivePlace(place, index) {
        this.setState({
            currentPlace: place,
            currentName: index
        });
    }

    addPlace() {

    }

    removePlaces(id) {
      if (window.confirm('Вы уверены, что хотите удалить?')){
        PlaceDataService.delete(id)
            .then(response => {
                console.log(response.data);
                this.refreshList();
                console.log(this.props.posts);
                this.props.router.navigate('/places');
            })
            .catch(e => {
                console.log(e);
            });}}
    

    render() {
        const { searchName, places, page,
            count,
            pageSize, } = this.state;
        const handleChange = (e) => {
            this.setState({ district: e.target.value })
        }

        return (
            <div id="wrapper" className="container">
                <h2>Пункты приема</h2>
                <div className="filters">
                    <div className="searchRegion">
                        <div class="search">
                            <input class="searchField" type="search" placeholder="Найти" aria-label="Search" value={searchName} onChange={this.onChangeSearchName} />
                            <div class="searchSubmit" type="button" onClick={this.retrievePlaces}><img width={25} height={25} src="img/search.png" /></div>
                        </div>
                        <div class="regions input-group">
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
                            <div class="input-group-append">
                                <button class="btn btn-outline-success" type="button" onClick={this.retrievePlaces1}>Button</button>
                            </div>
                        </div>
                    </div>
                    <div className="buttonsCrudTop">
                        <a href="/add">
                        <button className="addPlace"> 
                            Добавить место
                        </button>
                        </a>
                    
                    </div>
                </div>
                <div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Название компании</th>
                                <th>Адрес</th>
                                <th>Работает ли</th>
                                <th>Район</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            {places && places.map((place) => (
                                <tr>
                                    <th>{place.id}</th>
                                    <th>{place.name}</th>
                                    <th>{place.address}</th>
                                    <th>{place.status}</th>
                                    <th>{place.district}</th>
                                    <th><Link to={"/places/" + place.id}  className="btn btn-success btn-block">Изменить</Link>
                                    
                                    <Link className="btn btn-danger btn-block" onClick={() => this.removePlaces(place.id)}>Удалить</Link></th>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="paginationPage">
                    <div className="tableSize">
                        <span>Показать элементы:</span>
                        <select class="custom-select" onChange={this.handlePageSizeChange} value={pageSize}>
                            {this.pageSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Pagination
                        className="pagination my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}