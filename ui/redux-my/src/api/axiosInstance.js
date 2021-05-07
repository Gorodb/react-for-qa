import Axios from 'axios'
import https from 'https'

const apiUri = process.env.REACT_APP_API_URL

const axios = Axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
    baseURL: apiUri
});

export default axios;
