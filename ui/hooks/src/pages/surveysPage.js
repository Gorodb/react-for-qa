import {useState, useEffect} from 'react'

import useRequest from "../hoocs/useRequest";
import SurveyRequests from "../api/requests";
import SurveyItem from "../components/survey-item";

const SurveysPage = () => {
  const [ids, setIds] = useState([])
  const [onDeleteLoading, setOnDeleteLoading] = useState(false)
  const [{data, loading: surveysLoading, error}, getAllSurveys] = useRequest(SurveyRequests.getSurveys)
  const [, deleteSurvey] = useRequest(SurveyRequests.deleteSurveys)

  useEffect(() => {
    getAllSurveys()
  }, [getAllSurveys])

  const onClickHandler = (surveyId) => {
    ids.indexOf(surveyId) !== -1 ? setIds(ids.filter(id => id !== surveyId)) : setIds([...ids, surveyId])
  }

  const onDeleteHandler = async () => {
    setOnDeleteLoading(true)
    await deleteSurvey(ids)
    setOnDeleteLoading(false)
    setIds([])
    await getAllSurveys()
  }

  const loading = <div>Loading...</div>
  const isError = <div>error...</div>

  return (
    <div>
      <h1>Surveys</h1>
      {error && isError}
      {surveysLoading || onDeleteLoading ? loading :
        <SurveyTable
          data={data.data}
          onClickHandler={onClickHandler}
          onDeleteHandler={onDeleteHandler}
          isDisabled={!ids.length}
        />}
    </div>
  )
}

const SurveyTable = ({data, onClickHandler, onDeleteHandler, isDisabled}) => {
  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="container">
            <div className="row_item header">
              Checker
            </div>
            <div className="row_item header">
              Вопрос
            </div>
            <div className="row_item header">
              Ответы
            </div>
            <div className="row_item header">
              Правильный ответ
            </div>
          </div>
          {data.map(survey => (
            <SurveyItem key={survey._id} survey={survey} onClickHandler={onClickHandler}/>
          ))}
        </div>
      </div>
      <button className="btn btn-red" disabled={isDisabled} onClick={onDeleteHandler}>Удалить выбранные</button>
    </>
  )
}

export default SurveysPage
