import './survey.scss'

const Survey = ({ index, survey: {question, answers, rightAnswer, _id} }) => {
  const tableClass = `${index % 2 ? 'survey-container' : 'survey-container colored'}`

  return (
    <div className={tableClass}>
      <div className="checkbox">
        []
      </div>
      <div className="question">{question}</div>
      <div className="answers">{answers.map((answer, index) => <div className='answer' key={index}>{answer}</div>)}</div>
      <div className="right-answer">{rightAnswer}</div>
      <div className="delete">X</div>
    </div>
  )
}

export default Survey;
