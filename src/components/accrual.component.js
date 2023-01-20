import React, { Component, useState } from "react";
import Service from "../services/crud.service";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";
import '../styles/accrual.css';

export default class Accrual extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrievePlaces = this.retrievePlaces.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActivePlaces = this.setActivePlace.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            accruals: [],
            currentPlace: null,
            currentIndex: -1,
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

    retrievePlaces() {
        const { searchName, page, pageSize } = this.state;
        const params = this.getRequestParams(searchName, page, pageSize);

        Service.allAccrual(params)
            .then((response) => {
                const { accruals, totalPages } = response.data;

                this.setState({
                    accruals: accruals,
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

    setActivePlace(accrual, index) {
        this.setState({
            currentPlace: accrual,
            currentName: index
        });
    }

    download(){
        Service.download();

            
    }

    render() {
        const { searchName, accruals, page,
            count,
            pageSize,
        } = this.state;

        
        return (
            <div id="wrapper" className="container">
                <h2>Статистика приема</h2>
                <div className="filters">
                    <div className="searchRegion">
                        <div class="search">
                            <input class="searchField" type="search" placeholder="Найти" aria-label="Search" value={searchName} onChange={this.onChangeSearchName} />
                            <div class="searchSubmit" type="button" onClick={this.retrievePlaces}><img width={25} height={25} src="img/search.png" /></div>
                        </div>
                    </div>
                    {/* <div className="actions"> */}
                        <button onClick={this.download}>
                            Вывести excel
                        </button>
                       {/* <Link href={this.download} target="_blank" download>Вывести excel</Link> */}
                       {/* <Link to="/your_file.txt" target="_blank" download>Download</Link> */}
                    {/* </div> */}
                    

                </div>
                <div>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>wastepaper</th>
                                <th>glass</th>
                                <th>plastic</th>
                                <th>tin</th>
                                <th>points</th>
                                <th>date</th>
                                <th>userID</th>
                                <th>adminID</th>
                                <th>username</th>
                                <th>admin name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accruals && accruals.map((accrual) => (
                                <tr>
                                    <th>{accrual.operation_id}</th>
                                    <th>{accrual.wastepaper}</th>
                                    <th>{accrual.glass}</th>
                                    <th>{accrual.plastic}</th>
                                    <th>{accrual.tin}</th>
                                    <th>{accrual.points}</th>
                                    <th>{accrual.date}</th>
                                    <th>{accrual.userId}</th>
                                    <th>{accrual.adminId}</th>
                                    <th>{accrual.username}</th>
                                    <th>{accrual.adminame}</th>
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