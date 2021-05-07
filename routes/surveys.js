const express = require('express');
const router = express.Router();
const {checkErrors} = require('../middleware/validationErrors')
const {
  getAllSurveys,
  getSurvey,
  createSurvey,
  updateSurvey,
  validateSurvey,
  deleteSurvey,
} = require('../controllers/surveyController')

router.route('/')
  .post(validateSurvey(), checkErrors, createSurvey)
  .get(getAllSurveys)
  .delete(deleteSurvey)

router.route('/:id')
  .get(getSurvey)
  .put(validateSurvey(), checkErrors, updateSurvey)

module.exports = router;
