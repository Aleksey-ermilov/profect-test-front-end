import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import './testResult.scss'
import {clearListAnswers} from "../../store/redux/test/actionsTest";
import {useMessage} from "../../hooks/message.hook";

const TestResult = ({listAnswers,currentTest, error, clearListAnswers}) => {
    const history = useHistory();
    const message = useMessage()

    const [percentResult, setPercentResult] = useState(0)

    useEffect(() => {
        const { questions } = currentTest

        let sumPointCorrect = 0
        questions.forEach( item => {
            sumPointCorrect += item.pointsForCorrectAnswer
        })

        const result = []
        listAnswers.forEach( item => {
            const question = questions.find( q => q.id === item.question)
            const point = question.answers.find( a => a.id === item.answer).pointCorrect
            result.push(point)
        })
        const sumResult = result.reduce((accumulator, currentValue) => accumulator + currentValue)

        setPercentResult(sumResult * 100 / sumPointCorrect)

    }, []);

    useEffect(()=> {
        message(error)
    },[error,message])

    const handlerBtn = () => {
        history.push({
            pathname: '/boardTest',
        });
        clearListAnswers()
    }

    /*
    uid: string
  tid: string
  listAnswer: [object]
  time: string
  percent: string
  appraisal: string
  */

    return (
            <div className="testResult">
                <div className="testResult_boxResult">
                    <h3>Результат: {percentResult}%</h3>
                    <h4>Оценка: ...</h4>
                    <button className="buttonAll testResult_boxResult_btn" onClick={handlerBtn}>Назад</button>
                </div>
            </div>
    )
};

const mapStateToProps = state => ({
    currentTest: state.test.currentTest,
    listAnswers: state.test.listAnswers,
    error: state.app.error,
})

const mapDispatchToProps = {
    clearListAnswers
}

export default connect(mapStateToProps,mapDispatchToProps)(TestResult);
