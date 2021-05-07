import classes from '../createSurveyFrom.module.scss'

const Answer = ({ value, index, onHandleChange, onHandleDelete }) => {
  return (
    <div className={classes['form-item']}>
      <label htmlFor='answer'>Ответ {index + 1}</label>
      <div className={classes.answer} >
        <input type='text' name='answer' index={index} onChange={onHandleChange} value={value} placeholder='Ответ'/>
        <div onClick={() => {
          onHandleDelete(index)
        }} className={classes['btn-t']}>
          <i className={classes.cancel} />
        </div>
      </div>
    </div>
  )
}

export default Answer;
