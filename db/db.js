const LeafDB = require('leaf-db')
require('dotenv').config({path: `${process.cwd()}/.env`})

const { env } = process

const db = new LeafDB(env.DB, { root: `${process.cwd()}/db`, autoload: true, strict: false })

class Database {
  static async getSurveyById (surveyId = '') {
    return (await db.find({ _id: surveyId }))[0]
  }

  static async getALLSurveys () {
    return (await db.find())
  }

  static async deleteSurvey (surveyId) {
    await db.delete({ _id: surveyId }, { persist : true })
  }

  static async createSurvey (survey, lastUpdate = Date.now()) {
    const data = await db.insert({ ...survey, lastUpdate }, { persist : true })
    return data[0]
  }

  static async updateSurvey (_id, survey, lastUpdate = Date.now()) {
    const data = await db.update({ _id }, { ...survey, lastUpdate }, { persist : true })
    return data[0]
  }
}

module.exports = Database
