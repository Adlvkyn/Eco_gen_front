import React, { Component } from "react";
import '../styles/ecoAdvice.css';

export default class ecoAdvice extends Component {

    render() {
        return (
            <div className="container">
                <div className="joinUs">
                    <div className="joinContent">
                        <div className="joinText">
                            <span>Сделай свою жизнь</span>
                            <span>Экологичней уже сейчас</span>
                        </div>
                        <a href="/login" style={{ textDecoration: 'none' }}>
                        <button
                    className="btn btn-success joinBtn btn-block"
                   
                  >
                    <span>Присоединиться</span>
                    
                  </button>
                        {/* <div className="joinBtn">
                            <span>Присоединиться</span>
                        </div> */}
                        </a>
                    </div>
                </div>
                <div className="problem">
                    <fieldset>
                        <legend>
                            <span className="span1">Одной из основных проблем Республики Казахстан является</span> 
                            <span className="span2">проблема накопления огромного количества отходов</span> 
                        </legend>
                        <span>
                            В среднем городской житель ежегодно производит 300-340 килограммов различных 
                            бытовых отходов. Большой ущерб окружающей среде наносят органические отходы 
                            (пищевые отходы, отходы садоводства и пр.). Попадая на полигон в составе 
                            твердых бытовых отходов, они выделяют свалочный газ, в том числе горючий метан,
                                который приводит к пожарам и взрывам на полигонах, а также его парниковый 
                                эффект выше углекислого газа в 24 раза.
                        </span>
                        <br />
                        <span>
                            Совокупный объем накопленных в Казахстане твердых бытовых отходов (ТБО) 
                            составляет порядка 100 миллионов тонн. Ежегодно образуется около 5–6 миллионов 
                            тонн ТБО дополнительно. При этом на данный момент большинство отходов вывозят 
                            на полигоны без сортировки. Количество полигонов растет, всего их в Казахстане 
                            около 4 тысяч, включая стихийные свалки 
                        </span>
                    </fieldset>
                </div>
                <div className="ecoAdvice">
                    <div className="top">
                        <span>Наше решение</span>
                        <hr />
                    </div>
                    <div className="cards">
                        <div className="cardContent">
                            <div className="imgCard">
                                <img src="/img/ecoAdvice/solution1.png" alt="" />
                            </div>
                            <div className="textCard">
                                <span className="textCard1">Контейнеры</span>
                                <span className="textCard2">Сбор отходов рядом с домом</span>
                                <span className="textCard3">Реализуется сбор отходов в специальных контейнерах и
                                    баках, расположенного у домов жителей.</span>
                            </div>
                        </div>
                        <div className="cardContent">
                            <div className="imgCard">
                                <img src="/img/ecoAdvice/solution2.png" alt="" />
                            </div>
                            <div className="textCard">
                                <span className="textCard1">Сортировка на месте</span>
                                <span className="textCard2">Смешанный сбор отходов</span>
                                <span className="textCard3">Является аналогией вышеуказанному варианту, но сортировка
                                    проводится в зависимости от типов отходов, например, металлические отходы собираются
                                    отдельно от пластика и стекла.</span>
                            </div>
                        </div>
                        <div className="cardContent">
                            <div className="imgCard">
                                <img src="/img/ecoAdvice/solution3.png" alt="" />
                            </div>
                            <div className="textCard">
                                <span className="textCard1">Филиалы на каждом шагу</span>
                                <span className="textCard2">Пункты приема отходов</span>
                                <span className="textCard3">Это контейнеры, которые ставятся в общественных местах с
                                    целью сбора отходов. Центры для переработки. Это специальные организации, имеющие
                                    сотрудников, куда жители могут сдать кроме бытовых отходов, и технику, и
                                    промышленные оборудование. </span>
                            </div>
                        </div>
                        <div className="cardContent">
                            <div className="imgCard">
                                <img src="/img/ecoAdvice/solution4.png" alt="" />
                            </div>
                            <div className="textCard">
                                <span className="textCard1">Выгода</span>
                                <span className="textCard2">Бонусная система</span>
                                <span className="textCard3">Для стимулирования увелечения объемов переработки
                                    мусора, необходимо поощирять эко-активистов. Для этого на основе тарифов приема, можно
                                    будет получать выгоду, при переработке мусора.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}