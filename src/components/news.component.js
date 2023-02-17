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
 
                       
                            

                       
                        <div class="card">
                            <img width={116} height={108} src="https://d33wubrfki0l68.cloudfront.net/5f9340045ba885c4e705ea64d0c30625d01626d0/58430/cms_img/forestclouds.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text" ><b>Нейтрализация выбросов углерода и "Зеленая промывка"</b></p>
                                <p class="card-text" > Расследование The Guardian, опубликованное 18 января 2023 года... </p>
                            </div>
                        </div>
                        <div class="card">
                            <img width={116} height={108} src="https://d33wubrfki0l68.cloudfront.net/6e92a61cfc04b83b3354ab1aa9d7a9dcf69eb90b/80c16/cms_img/pexels-lisa-fotios-1351238.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <p class="card-text" ><b>Как стать веганом с ограниченным бюджетом</b></p>
                                <p class="card-text" > Переход на веганство может обойтись дорого, если вы не знаете различных существующих способов... </p>
                            </div>
                        </div>
                        <div class="card">
                            <img width={116} height={108} src="https://d33wubrfki0l68.cloudfront.net/25ec2eb152d91a30e2ad4134dba0bb5c17eb2ce7/d83d3/cms_img/cover-photo.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <p class="card-text" ><b>5 способов борьбы с глобальным потеплением в вашей повседневной жизни</b></p>
                                <p class="card-text" >Если вы читаете это, то, вероятно, уже пытаетесь сократить свой углеродный след. Мы здесь... </p>
                            </div>
                        </div>
                        <div class="card">
                            <img width={116} height={108} src="https://d33wubrfki0l68.cloudfront.net/efcfbb3aeb7d28b670837254f3bccc7e9d0324ae/2de86/cms_img/electric-poles-.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                            <p class="card-text" ><b>5 советов по экономии энергии в домашних условиях</b></p>
                                <p class="card-text" >Мы подумали, что было бы полезно поделиться несколькими советами, которые помогут вам сократить свои счета и в то же время сэкономить энергию!... </p>
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
                    </div>
                </div>
            </div>
        );
    }
}
