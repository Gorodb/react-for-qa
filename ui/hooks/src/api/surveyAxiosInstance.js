const Axios = require('axios')

const axios = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

module.exports = axios
