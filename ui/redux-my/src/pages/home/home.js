import { useState, useEffect } from "react";

import requests from "../../api/requests";

import Survey from "../../components/survey";
import SurveyHeader from "../../components/survey-header";

const HomePage = () => {
  const [surveys, setSurveys] = useState([])
  const [ids, setIds] = useState([])

  const onCheckHandler = (surveyId) => {
    ids.indexOf(surveyId) !== -1 ? setIds(ids.filter(id => id !== surveyId)) : setIds([...ids, surveyId])
  }

  useEffect(() => {
    getSurveys()
  }, [])

  const getSurveys = () => {
    requests.getSurveys()
      .then(({ data }) => {
        setSurveys(data)
      }).catch(error => {
      console.log(error)
    })
  }

  const deleteSurveys = () => {
    if (ids.length) {
      requests.deleteSurveys(ids).then(() => {
        getSurveys()
      })
    }
  }

  return (
    <div>
      <SurveyHeader />
      {surveys.map((survey, index) => <Survey survey={survey} index={index} key={survey._id} onCheckHandler={onCheckHandler} />)}
      <div onClick={deleteSurveys}>Удалить выбранные вопросы</div>
    </div>
  )
}

export default HomePage;
