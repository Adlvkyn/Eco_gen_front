// import React, { Component } from "react";
// import { load } from '@2gis/mapgl';
// import '../styles/home.css';
// const MapWrapper = React.memo(
//     () => {
//         return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
//     },
//     () => true,
// );
// const MapGL = () => {
//     React.useEffect(() => {
//         const map = new mapgl.Map('map-container', {
//             center: [55.31878, 25.23584],
//             zoom: 13,
//             key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
//         });
//         // Destroy the map, if Map component is going to be unmounted
//         return () => map.destroy();
//     }, []);
//     return (
//         <div style={{ width: '100%', height: '100%' }}>
//             <MapWrapper />
//         </div>
//     );
// };

// export const Map1 = () => {
//     useEffect(() => {
//         let map;
//         load().then((mapglAPI) => {
//             map = new mapglAPI.Map('map-container', {
//                 center: [55.31878, 25.23584],
//                 zoom: 13,
//                 key: 'Your API access key',
//             });
//         });

//         // Удаляем карту при размонтировании компонента
//         return () => map && map.destroy();
//     }, []);

//     return (
//         <div style={{ width: '100%', height: '100%' }}>
//             <MapWrapper />
//         </div>
//     );
// };

// export default class Map extends Component {
   
//    render(){
//         return (
//             <div style={{ width: '100%', height: '100%' }}>
//                 <MapGL />
//             </div>
//         );
//         }
   
// }