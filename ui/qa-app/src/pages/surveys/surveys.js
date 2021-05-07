import { useState, useEffect } from "react";

import requests from "../../api/requests";
import Survey from "../../components/survey/survey";

const Surveys = () => {
  const [surveys, setSurveys] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    requests.getSurveys().then(({ data }) => {
      setSurveys(data)
      setIsLoading(false)
    })
  }, [])

  const loading = <div>Loading...</div>
  const surveysList =
    <>
      <h1>Surveys list page</h1>
      <div>
        {surveys.map((survey, index) => {
          return (
            <Survey key={survey._id} survey={survey} index={index} />
          )
        })}
      </div>
      <div className='delete-from-list'>Удалить выбранные элементы</div>
    </>

  return isLoading ? loading : surveysList
}

export default Surveys;
