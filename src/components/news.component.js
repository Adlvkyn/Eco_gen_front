import React, { Component } from "react";
import Service from "../services/crud.service";
import '../styles/news.css';

export default class News extends Component {
    constructor(props) {
        super(props);
       
        this.getAllNews = this.getAllNews.bind(this);

        this.state = {
            news: [],
            currentPlace: null,
            currentIndex: -1
        };
      
    }


    getAllNews() {

        Service.getAllNews()
            .then((response) => {
                const { news } = response.data;

                this.setState({
                    news: news
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    

    render() {
        
        const { news } = this.state;

const list = [];

        return (
            <div className="news">
                <div className="container">
                    <div className="headingTop">
                        <span>Новости об экологии</span>
                    </div>
                    <div className="newsContent">
     {/* {               
news.forEach((news1) => {
    <div class="card">
    <img src={news1.picture} class="card-img-top" alt="..." />
    <div class="card-body">
        <p class="card-text">{news1.title}</p>
    </div>
    </div> 
  })} */}
 
                       
                            

                       
                        {/* <div class="card">
                            <img src="img/ecoAdvice/backEcoAdvice.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="img/ecoAdvice/backEcoAdvice.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="img/ecoAdvice/backEcoAdvice.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="img/ecoAdvice/backEcoAdvice.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="img/ecoAdvice/backEcoAdvice.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="img/ecoAdvice/backEcoAdvice.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="img/ecoAdvice/backEcoAdvice.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
