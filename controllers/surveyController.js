const ErrorResponse = require('../middleware/errorResponse')
const asyncHandler = require('../middleware/asyncHandler')
const { check } = require('express-validator')

const db = require('../db/db')

// @desc    получение списка опросов
// @rout    GET /survey
exports.getAllSurveys = asyncHandler(async (req, res, next) => {
  const surveys = await db.getALLSurveys()

  res.status(200).json({data: surveys})
})

// @desc    получение опроса по id
// @rout    GET /survey/:id
exports.getSurvey = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const survey = await db.getSurveyById(id)

  if (!survey) {
    return next(new ErrorResponse(`Опроса с id ${req.params.id} не найдено`, 404))
  }

  res.status(200).json({data: survey})
})

// @desc    создание опроса
// @rout    POST /survey
exports.createSurvey = asyncHandler(async (req, res, next) => {
  const { answers, question, rightAnswer } = req.body

  const data = await db.createSurvey({ answers, question, rightAnswer })

  res.status(200).json({data})
})

exports.validateSurvey = (req) => [
  check('question')
    .isString().withMessage('Вопрос должен быть текстом')
    .notEmpty().withMessage('Вопрос не должен быть пустым'),
  check('answers')
    .isArray().withMessage('Список ответов должен быть массивом')
    .notEmpty().withMessage('Должен быть хотя бы один ответ'),
  check('rightAnswer')
    .custom((value, {req, loc, path}) => {
      if (typeof Number.parseInt(value, 10) !== 'number') {
        throw new Error("Номер ответа должен быть числом");
      } else if (Number.parseInt(value, 10) > req.body.answers.length) {
        throw new Error("Номер правильного ответа больше, чем количество вопросов");
      } else if (Number.parseInt(value, 10) <= 0) {
        throw new Error("Номер правильного ответа должен быть больше нуля");
      } else {
        return true;
      }
    })
]

// @desc    обновление опроса
// @rout    PUT /survey/:id
exports.updateSurvey = asyncHandler(async (req, res, next) => {
  const { answers, question, rightAnswer, _id } = req.body
  const id = req.params.id

  const data = await db.updateSurvey(id,{ answers, question, rightAnswer })

  res.status(200).json({data})
})

// @desc    удаление массива опросов
// @rout    DELETE /survey?ids[]=
exports.deleteSurvey = asyncHandler(async (req, res, next) => {
  const { ids = [] } = req.query

  if (!ids[0]) {
    return next(new ErrorResponse(`Не передан список id опросов`, 404))
  }

  const arrayOfIds = ids[0].split(',')

  for await (let id of arrayOfIds) {
    await db.deleteSurvey(id)
  }

  res.status(200).json({
    success: true
  })
})
