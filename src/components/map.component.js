// import React, { Component } from "react";
// import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
// import PlaceDataService from "../services/crud.service";
// import { withRouter } from '../common/with-router';
// import '../styles/home.css';

//  class Maps extends Component {
//     constructor(props) {
//         super(props);

//         this.getPlace = this.getPlace.bind(this);


//         this.state = {
//           currentPlace: {
//             id: null,
//             name: "",
//             address: "",
//             worked: ""
//           },
//           message: ""
//         };
//       }

//     componentDidMount() {
//         this.getPlace(this.props.router.params.id);
//       }

//     getPlace(id) {
//         PlaceDataService.get(id)
//           .then(response => {
//             this.setState({
//               currentPlace: response.data
//             });
//             console.log(response.data);
//           })
//           .catch(e => {
//             console.log(e);
//           });
//       }

//     render() {
//         const { currentPlace } = this.state;
//         return (
//             <YMaps>
//                 <div className="map-container" style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
//                     <Map
//                         defaultState={{
//                             center: [43.2567, 76.9286],
//                             zoom: 12,
//                             controls: [],
//                         }}
//                         width='window.innerWidth' height={window.innerHeight}
//                     >
//                         <ZoomControl options={{ float: "right" }} />
//                         <Placemark geometry={[43.23417, 76.95315]} />
//                         <Placemark geometry={[55.684758, 37.738521]} />
//                     </Map>
//                     <div className="places-container" style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
//                         <div class="map-card__addresses-item">
//                             <div class="map-address">
//                                 <div class="map-address__descr">
//                                     <div class="map-address__delivery-type"> Super </div>
//                                     <div class="map-address__name"> {currentPlace.name} </div>
//                                     <div class="map-address__location"> {currentPlace.address} </div>
//                                     <time class="map-address__time">09:00 - 23:00</time>
//                                 </div>

//                             </div>
//                             <div class="map-address">
//                                 <div class="map-address__descr">
//                                     <div class="map-address__delivery-type"> Super </div>
//                                     <div class="map-address__name"> Magnum - ШУГЫЛА </div>
//                                     <div class="map-address__location"> г. АЛМАТЫ, мкр.Шугыла ул.С.Жунисов д.14 кор.15 н.п. 75,76 </div>
//                                     <time class="map-address__time">09:00 - 23:00</time>
//                                 </div>

//                             </div>
//                             <div class="map-address">
//                                 <div class="map-address__descr">
//                                     <div class="map-address__delivery-type"> Super </div>
//                                     <div class="map-address__name"> Magnum - ШУГЫЛА </div>
//                                     <div class="map-address__location"> г. АЛМАТЫ, мкр.Шугыла ул.С.Жунисов д.14 кор.15 н.п. 75,76 </div>
//                                     <time class="map-address__time">09:00 - 23:00</time>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </YMaps>
//         );
//     }
// }

// export default withRouter(Maps);

/////////////////////////////////////
// import React, { Component } from "react";
// import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
// import PlaceDataService from "../services/crud.service";
// import { withRouter } from '../common/with-router';
// import '../styles/home.css';

// class Maps extends Component {
//     constructor(props) {
//         super(props);

//         this.getPlace = this.getPlace.bind(this);

//         this.state = {
//             currentPlace: null,
//             message: ""
//         };
//     }

//     componentDidMount() {
//         this.getPlace(this.props.router.params.id);
//     }

//     getPlace(id) {
//         PlaceDataService.get(id)
//             .then(response => {
//                 this.setState({
//                     currentPlace: response.data
//                 });
//                 console.log(response.data);
//             })
//             .catch(e => {
//                 console.log(e);
//             });
//     }

//     handlePlacemarkClick = (placeId) => {
//         this.getPlace(placeId);
//     }

//     render() {
//         const { currentPlace } = this.state;
//         return (
//             <YMaps>
//                 <div className="map-container" style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
//                     <Map
//                         defaultState={{
//                             center: [43.2567, 76.9286],
//                             zoom: 12,
//                             controls: [],
//                         }}
//                         width='window.innerWidth' height={window.innerHeight}
//                     >
//                         <ZoomControl options={{ float: "right" }} />
//                         <Placemark geometry={[43.23417, 76.95315]} onClick={() => this.handlePlacemarkClick(35)} />
//                         <Placemark geometry={[43.20175, 76.89282]} onClick={() => this.handlePlacemarkClick(36)} />
//                     </Map>
//                     <div className="places-container" style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
//                         {currentPlace && (
//                             <div class="map-card__addresses-item">
//                                 <div class="map-address">
//                                     <div class="map-address__descr">
//                                         <div class="map-address__delivery-type"> Super </div>
//                                         <div class="map-address__name"> {currentPlace.name} </div>
//                                         <div class="map-address__location"> {currentPlace.address} </div>
//                                         <time class="map-address__time">{currentPlace.worked}</time>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </YMaps>
//         );
//     }
// }

// export default withRouter(Maps);





import React, { Component } from "react";
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
import PlaceDataService from "../services/crud.service";
import { withRouter } from '../common/with-router';
import '../styles/home.css';

class Maps extends Component {
    constructor(props) {
        super(props);

        this.getPlace = this.getPlace.bind(this);
        this.onPlaceClick = this.onPlaceClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
        this.onSelectedPlaceClick = this.onSelectedPlaceClick.bind(this);
        this.onCloseCardClick = this.onCloseCardClick.bind(this);

        this.state = {
            places: [],
            selectedPlaceCoords: null,
            selectedPlace: null,
            selectedPlace1: null,
            message: ""
        };
    }

    mapRef = React.createRef();

    componentDidMount() {
        this.getPlace(this.props.router.params.id);
    }

    getPlace() {
        PlaceDataService.getAll()
            .then(response => {
                this.setState({
                    places: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    onPlaceClick(coords) {
        this.setState({
            selectedPlaceCoords: coords,
            selectedPlace1: null
        }, () => {
            const map = this.mapRef.current;
            const { selectedPlaceCoords } = this.state;
            map.panTo(selectedPlaceCoords);
        });
    }

    onZoom(coords) {
        this.setState({
            selectedPlaceCoords: coords,
        }, () => {
            const map = this.mapRef.current;
            const { selectedPlaceCoords } = this.state;
            map.panTo(selectedPlaceCoords, { duration: 1000 }).then(() => {
                map.setZoom(17)
            });
        });


    }


    onBackClick() {
        this.setState({
            selectedPlaceCoords: null,
            selectedPlace: null
        }, () => {
            const map = this.mapRef.current;
            map.setZoom(12)
        });
    }

    onSelectedPlaceClick(place) {
        // const places = this.places;
        // let name = places.find(place => place.latitude === selectedPlaceCoords[0] && place.longitude === selectedPlaceCoords[1]).name;
        // let address = places.find(place => place.latitude === selectedPlaceCoords[0] && place.longitude === selectedPlaceCoords[1]).address;
        // let worked = places.find(place => place.latitude === selectedPlaceCoords[0] && place.longitude === selectedPlaceCoords[1]).worked;
        // let myPlace = {name, address,worked};
        this.setState({
            selectedPlace1: place,
            selectedPlaceCoords: null,
            selectedPlace: null
        });

    }

    onCloseCardClick() {
        this.setState({
            selectedPlace1: null, selectedPlaceCoords: null,
            selectedPlace: null
        },() => {
            const map = this.mapRef.current;
            map.setZoom(12)
        });
    }

    render() {
        const { currentPlace, places, selectedPlaceCoords, selectedPlace1 } = this.state;
        return (
            <YMaps>
                <div className="map-container" style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
                    <Map
                        defaultState={{
                            center: [43.2567, 76.9286],
                            zoom: 12,
                            controls: [],
                        }}
                        width='window.innerWidth' height={window.innerHeight}
                        instanceRef={this.mapRef}
                    >
                        <ZoomControl options={{ float: "right" }} />
                        {places.map(place => (
                            <Placemark
                                key={place.id}
                                geometry={[place.latitude, place.longitude]}
                                options={{ preset: "islands#blueDotIcon" }}
                                onClick={() => this.onPlaceClick([place.latitude, place.longitude])}
                            />
                        ))}
                    </Map>

                    <div className="places-container" style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, overflowY: 'auto', maxHeight: '100%' }}>

                        {

                            selectedPlace1 ? (
                                <div className="map-card" style={{ position: 'absolute', top: 0, left: 0, zIndex: 3 }}>
                                    <div className="map-card__addresses-item" style={{ marginLeft: 40 }}>
                                        <div className="map-address">
                                            <div className="map-address__descr" style={{ fontSize: 20, width: 400 }}>
                                              
                                                <div style={{ display: "flex", alignItems: "center", marginTop: 20, cursor: "pointer" }} onClick={this.onCloseCardClick}>
                                                    <span style={{ fontSize: 20, marginRight: 5, color: '#94CA0B', fontWeight: 500 }}>&lt;</span>
                                                    <span>Назад</span>
                                                </div>
                                                <div className="map-address__name" style={{ fontSize: 18, fontWeight: 500, marginTop: 40 }}>{selectedPlace1.name}</div>
                                                <div className="map-address__location" >{selectedPlace1.address}</div>
                                                <div className="map-address__description">{selectedPlace1.description}</div>
                                                <time className="map-address__time">Режим работы {selectedPlace1.worked}</time>
                                                <br></br>
                                                <img src="img/KWR1.png" style={{ height: 300 }}></img>
                                                <br></br>
                                                <button style={{ backgroundColor: '#94CA0B', marginLeft: 60, color: "white", borderRadius: 20, width: 300, height: 40, borderWidth: 0 }} onClick={() => this.onZoom([selectedPlace1.latitude, selectedPlace1.longitude])}>Показать на карте</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                selectedPlaceCoords ? (
                                    <div className="map-card__addresses-item">
                                        <div className="map-address">
                                            <div className="map-address__descr"  onClick={() => this.onSelectedPlaceClick(selectedPlaceCoords)}>
                                                <div className="map-address__name">{places.find(place => place.latitude === selectedPlaceCoords[0] && place.longitude === selectedPlaceCoords[1]).name}</div>
                                                <div className="map-address__location">{places.find(place => place.latitude === selectedPlaceCoords[0] && place.longitude === selectedPlaceCoords[1]).address}</div>
                                                <time className="map-address__time">{places.find(place => place.latitude === selectedPlaceCoords[0] && place.longitude === selectedPlaceCoords[1]).worked}</time>
                                            </div>
                                            <button style={{ backgroundColor: '#94CA0B', marginLeft: 60, color: "white", borderRadius: 20, width: 100, height: 40, borderWidth: 0 }} onClick={this.onBackClick}>Назад</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="map-card__addresses-item" >
                                        {places.map(place => (
                                            <div className="map-address"  >
                                                <div className="map-address__descr" onClick={() => this.onSelectedPlaceClick(place)}>

                                                    <div className="map-address__name"> {place.name} </div>
                                                    <div className="map-address__location"> {place.address} </div>
                                                    <time className="map-address__time">{place.worked} </time>
                                                </div>
                                            </div>
                                        ))}
                                    </div>)}
                    </div>
                </div>
            </YMaps>
        );
    }
}

export default withRouter(Maps);