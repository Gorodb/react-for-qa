import apiService from './apiService';

export default class requests extends apiService {
    static async createProject(project, platform, description) {
        await this._postRequest(`api/allure/project`, {
            project,
            platform,
            description
        })
    }
    static getSurveys () {
        return this._getRequest('/surveys')
    }

    static getSurvey (id) {
        return this._getRequest(`/surveys/${id}`)
    }

    static createSurvey (data) {
        return this._postRequest(`/surveys`, data)
    }

    static updateSurvey (id, data) {
        return this._putRequest(`/surveys/${id}`, data)
    }

    static deleteSurvey (id) {
        return this._deleteRequest(`/surveys?ids[]=${id}`)
    }

    static deleteSurveys (ids = []) {
        return this._deleteRequest(`/surveys?ids[]=${ids.join(',')}`)
    }
}
