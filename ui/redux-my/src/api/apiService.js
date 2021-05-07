import axios from './axiosInstance'

export default class ApiService {
    static async _postRequest (url, body = {}) {
        try {
            const { data } = await axios.post(url, body)
            return data
        } catch (e) {
            console.error(e.response)
            return e.response
        }
    }

    static async _getRequest (url, params = {}) {
        let queryParams = ''
        for (let param in params) {
            if (params[param] !== undefined) {
                queryParams += `${param}=${params[param]}&`
            }
        }

        try {
            const { data } = await axios.get(`${url}?${encodeURI(queryParams)}`)
            return data
        } catch (e) {
            console.error(e)
            return e.response
        }
    }

    static async _putRequest (url, body = {}) {
        try {
            const { data } = await axios.put(url, body)
            return data
        } catch (e) {
            console.error(e.response)
            return e.response
        }
    }

    static async _deleteRequest (url) {
        try {
            const { data } = await axios.delete(url)
            return data
        } catch (e) {
            console.error(e.response)
            return e.response
        }
    }
}
