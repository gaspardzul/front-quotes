import axiosApi from "./axiosApi";

class WebApi {
  static ApisType = (url, method = "post", params = {}) => {
    switch (method) {
      case "post":
        return axiosApi.post(url, params);
        break;
      case "put":
        return axiosApi.put(url, params);
        break;
      case "get":
        return axiosApi.get(url);
        break;
      case "delete":
        return axiosApi.delete(url);
        break;
    }
  };

  static getQuotes(filter=''){
      return WebApi.ApisType(`/quotes/${filter}`,"get")
  }

  static getCategories(){
    return WebApi.ApisType(`/categories/`,"get")
  }


  static saveJwt(data) {
    return WebApi.ApisType(`/quotes/`, "post", data);
  }

}

export default WebApi;
