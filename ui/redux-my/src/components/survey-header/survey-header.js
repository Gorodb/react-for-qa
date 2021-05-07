import classes from './survey-header.module.scss'

const SurveyHeader = () => {
  return (
    <div className={`${classes['survey-header']} ${classes['colored-row']}`}>
      <div className={classes.number}>Номер</div>
      <div className={classes.question}>Вопрос</div>
      <div className={classes.answers}>Ответы</div>
      <div className={classes['right-answer']}>Правильный ответ</div>
      <div className={classes.button}>Кнопки</div>
    </div>
  )
}

export default SurveyHeader;
