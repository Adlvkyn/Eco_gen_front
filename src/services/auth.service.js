import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
const API_URL_CHECK = "http://localhost:8080/api/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  sendNumbers(email){
    return axios.post(API_URL_CHECK + "sendNumbers", null, { params : {
      to : email
    }
     
    })
    .then(response => response.data);
  }

  checkNumbers(expectedNumbers){
    return axios.post(API_URL_CHECK + "checkNumbers", null, { params : {
      expectedNumbers : expectedNumbers
    }
     
    })
    .then(response => response.data);
  }

  changePassword(confirmpassword,email){
    return axios.put(API_URL_CHECK + "userInfo/changePasswordByEmailOrUsername", null, { params : {
      password : confirmpassword,
      email: email
    }
     
    })
    .then(response => response.data);
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  createQR(wastepaper, glass, plastic, tin, currentUser){
    return axios.post(API_URL_CHECK + "qrcode", null, { params : {
      wastepaper : wastepaper,
      glass : glass,
      plastic : plastic,
      tin : tin,
      currentIdAdmin:currentUser
    },
    responseType:'arraybuffer'
     
    })
    .then(response => {
      let blob = new Blob(
        [response.data], 
        { type: response.headers['content-type'] }
      )
      let image = URL.createObjectURL(blob)
      return image
    });
  }
}

export default new AuthService();
