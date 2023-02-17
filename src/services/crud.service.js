import http from "../http-common";
import axios from "axios";

const API_URL_CHECK = "http://localhost:8080/api/";
class PlaceDataService {
  getAll() {
    return http.get("/allPlaces");
  }

  getAllPage(params) {
    return http.get("/placesPage", { params });
  }

  getAllPage1(params) {
    return http.get("/placesDistrict", { params });
  }

  get(id) {
    return http.get(`/places/${id}`);
  }

  create(data) {
    return http.post("/places", data);
  }

  update(id, data) {
    return http.put(`/places/${id}`, data);
  }

  delete(id) {
    return http.delete(`/places/${id}`);
  }

  deleteAll() {
    return http.delete(`/places`);
  }

  findByName(name) {
    return http.get(`/places?name=${name}`);
  }

  allAccrual(params) {
    return http.get(`/allAccrual`, { params });
  }
  download() {
    return axios({
      url: API_URL_CHECK + "download",
      method: 'GET',
      responseType: 'blob', 
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Отчет_приема.xlsx');
      document.body.appendChild(link);
      link.click();
    });
  }

  getAllNews() {
    return axios.get('/news/getAllNews');
  }
}

export default new PlaceDataService();