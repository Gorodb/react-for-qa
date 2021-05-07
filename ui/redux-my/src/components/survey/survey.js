import classes from './survey.module.scss'

import DeleteButton from "../buttons/delete-button";
import Checkbox from "../checkbox";

const Survey = ({ survey: { _id, answers, question, rightAnswer }, index: number, onCheckHandler }) => {
  const onDeleteClickHandler = (name) => {
    console.log(`Удаляем вопрос '${name}'`)
  }

  const surveyClass = `${classes.survey} ${number % 2 ? classes['colored-row'] : ''}`

  return (
    <div className={surveyClass}>
      <div className={classes.number}><Checkbox onCheckHandler={onCheckHandler} id={_id} /></div>
      <div className={classes.question}>{question}</div>
      <div className={classes.answers}>{answers.map((answer, index) => <div key={index}>{++index}. {answer}</div>)}</div>
      <div className={classes['right-answer']}>{rightAnswer}</div>
      <div className={classes.button}><DeleteButton onClickHandler={() => onDeleteClickHandler(question)} /></div>
    </div>
  )
}

export default Survey;
