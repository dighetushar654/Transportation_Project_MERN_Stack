const axios = require("axios");
const instance = axios.create({
    baseURL: "https://trans-backend654.herokuapp.com/"
})

export default instance;
