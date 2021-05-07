import axios from "./surveyAxiosInstance";

export default class SurveyRequests {
  static getSurveys () {
    return axios({
      method: 'get',
      url: '/surveys'
    })
  }

  static getSurvey (id) {
    return axios({
      method: 'get',
      url: `/surveys/${id}`
    })
  }

  static createSurvey (data) {
    return axios({
      method: 'post',
      url: `/surveys`,
      data
    })
  }

  static deleteSurvey (id) {
    return axios({
      method: 'delete',
      url: `/surveys/${id}`
    })
  }

  static deleteSurveys (ids = []) {
    const params = ids.reduce((acc, id) => acc + `${id},`, '')
    return axios({
      method: 'delete',
      url: `/surveys/delete?ids[]=${params}`
    })
  }
}
