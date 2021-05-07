import { useState } from 'react'

const SurveyItem = ({survey, onClickHandler}) => {
  const [checked, toggleChecked] = useState(false)
  const {question, rightAnswer, answers = [], _id} = survey

  const onCheckHandler = (id) => {
    onClickHandler(id)
    toggleChecked(!checked)
  }

  return (
    <div className="container">
      <div className="row_item checker">
        <input type="checkbox" name={_id} checked={checked} onChange={() => toggleChecked(!checked)} onClick={() => onCheckHandler(_id)} />
        <span style={{cursor: "pointer"}} onClick={() => onCheckHandler(_id)}>&nbsp; Check it</span>
      </div>
      <div className="row_item question">
        {question}
      </div>
      <div className="row_item answers">
        {answers.map((answer, inx) => <div className='answer' key={inx}>Ответ {inx + 1}: {answer}</div>)}
      </div>
      <div className="row_item right_answer">
        {Number.parseInt(rightAnswer, 10) + 1}
      </div>
    </div>
  )
}

export default SurveyItem;
