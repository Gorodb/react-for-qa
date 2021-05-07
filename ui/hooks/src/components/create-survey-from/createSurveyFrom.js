import {useEffect, useRef, useState} from "react";

import classes from './createSurveyFrom.module.scss'
import Answer from "./components/answer";
import useRequest from "../../hoocs/useRequest";
import SurveyRequests from "../../api/requests";

const CreateSurveyFrom = () => {
  const [{error}, createSurvey] = useRequest(SurveyRequests.createSurvey)
  const questionRef = useRef(null)
  const initialState = {
    question: '',
    rightAnswer: '',
    answers: ['', '']
  }

  const [survey, setSurvey] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  const onHandleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    createSurvey(survey)
    setIsLoading(false)
    if (!error) {
      setSurvey(initialState)
    }
  }

  const onHandleChange = (event) => {
    setSurvey({...survey, [event.target.name]: event.target.value})
  }

  const onAnswerChange = (event) => {
    const answerNumber = Number.parseInt(event.target.attributes.index.value, 10)
    setSurvey({
      ...survey,
      answers: [
        ...survey.answers.slice(0, answerNumber),
        event.target.value,
        ...survey.answers.slice(answerNumber + 1)
      ]
    })
  }

  const onAnswerDelete = (number) => {
    if (survey.answers.length > 2) {
      const answerNumber = Number.parseInt(number, 10)
      setSurvey({...survey, answers: [...survey.answers.slice(0, answerNumber), ...survey.answers.slice(answerNumber + 1)]})
    }
  }

  const addAnswerHandler = () => {
    setSurvey({
      ...survey,
      answers: [...survey.answers, '']
    })
  }

  useEffect(() => {
    questionRef.current.focus()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <div className={classes.form}>
        <div className={classes['form-column']}>
          <div className={classes['form-item']}>
            <label htmlFor="question">Вопрос</label>
            <input type='text' name='question' onChange={onHandleChange} value={survey.question} ref={questionRef}
                   placeholder='Введите вопрос'/>
          </div>
          <div className={classes['form-item']}>
            <label htmlFor="rightAnswer">Правильный ответ</label>
            <input type='text' name='rightAnswer' onChange={onHandleChange} value={survey.rightAnswer}
                   placeholder='Укажите номер правильного ответа'/>
          </div>
        </div>
        <div className={classes['form-column']}>
          {survey.answers.map((answer, index) =>
            <Answer
              onHandleChange={onAnswerChange}
              onHandleDelete={onAnswerDelete}
              value={answer}
              index={index}
              key={index}
            />)}
          <div onClick={addAnswerHandler} className={classes.button}>Добавить ответ</div>
        </div>
      </div>
      <button className={`${classes.button} ${classes['button-black']}`}>Создать</button>
    </form>
  )
}

export default CreateSurveyFrom;
