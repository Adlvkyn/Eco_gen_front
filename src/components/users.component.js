// import React, { Component } from "react";
// import { Navigate } from "react-router-dom";
// import AuthService from "../services/auth.service";
// import '../styles/profile.css';
// import { Link } from "react-router-dom";

// export default class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.retrievePlaces = this.retrievePlaces.bind(this);
//         this.retrievePlaces1 = this.retrievePlaces1.bind(this);

//     this.state = {
//       redirect: null,
//       userReady: false,
//       currentUser: { username: "" },
//       page: 1,
//       pageSize: 3,
//     };
//     this.pageSizes = [3, 6, 9];
//   }

//   componentDidMount() {
//     const currentUser = AuthService.getCurrentUser();

//     if (!currentUser) this.setState({ redirect: "/home" });
//     this.setState({ currentUser: currentUser, userReady: true })
//   }

//   render() {
//     if (this.state.redirect) {
//       return <Navigate to={this.state.redirect} />
//     }

//     const { currentUser } = this.state;

//     const users = [
//       { id: 1, name: 'Tussupov', score: 698, image: 'img/user1.jpg' },
//       { id: 2, name: 'Kiplon', score: 645, image: 'img/user2.jpg' },
//       { id: 3, name: 'Toqayev007', score: 622, image: 'img/user3.jpg' },
//       { id: 4, name: 'Jagat', score: 620, image: 'img/user4.png' },
//       { id: 5, name: 'Master.01', score: 598, image: 'img/user5.jpeg' },
//     ];

//     return (
//         <div id="wrapper" className="container">
//         <h2>Пользователи</h2>
//         <div className="filters">
//             <div className="searchRegion">
//                 <div class="search">
//                     <input class="searchField" type="search" placeholder="Найти" aria-label="Search" />
//                     <div class="searchSubmit" type="button" ><img width={25} height={25} src="img/search.png" /></div>
//                 </div>
//             </div>
//             <div className="buttonsCrudTop">
//                 <a href="/add">
//                 <button className="addPlace"> 
//                     Добавить пользователя
//                 </button>
//                 </a>
            
//             </div>
//         </div>
//         <div>
//             <table className="table ">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Название компании</th>
//                         <th>Адрес</th>
//                         <th>Время работы</th>
//                         <th>Район</th>
//                         <th>Действие</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users && users.map((users) => (
//                         <tr>
//                             <th>{users.id}</th>
//                             <th>{users.name}</th>
//                             <th>{users.address}</th>
//                             <th>{users.worked}</th>
//                             <th>{users.district}</th>
//                             <th><Link to={"/users/" + users.id}  className="btn btn-success btn-block">Изменить</Link>
                            
//                             <Link className="btn btn-danger btn-block" onClick={() => this.removePlaces(users.id)}>Удалить</Link></th>
                            
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
//     );
//   }
// }
