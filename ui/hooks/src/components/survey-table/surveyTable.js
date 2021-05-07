import SurveyItem from "../survey-item";

const SurveyTable = ({ data, onClickHandler, onDeleteHandler }) => {
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
      <button className="btn btn-red" onClick={onDeleteHandler}>Удалить выбранные</button>
    </>
  )
}

export default SurveyTable;
