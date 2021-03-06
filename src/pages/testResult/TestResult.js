import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import './testResult.scss'
import {clearListAnswers, sendListAnswer} from "../../store/redux/test/actionsTest";
import {useMessage} from "../../hooks/message.hook";

const TestResult = ({listAnswers,currentTest, error, clearListAnswers, sendListAnswer}) => {
    const history = useHistory();
    const message = useMessage()

    const [percentResult, setPercentResult] = useState(0)
    const [appraisalResult, setAppraisalResult] = useState(0)

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
        const percent = sumResult * 100 / sumPointCorrect

        setPercentResult(percent)
        setAppraisalResult( () => {
            if (percent <= 50){
                return 2
            }
            if (percent >= 51 && percent <= 75) {
                return 3
            }
            if (percent >= 76 && percent <= 90){
                return 4
            }
            if (percent >= 91){
                return 5
            }
        })

    }, []);

    useEffect(()=> {
        message(error)
    },[error,message])

    const handlerBtn = () => {
        sendListAnswer(listAnswers,percentResult,appraisalResult,currentTest.nameTest)
        history.push({
            pathname: '/boardTest',
        });
        clearListAnswers()
    }


    return (
            <div className="testResult">
                <div className="testResult_boxResult">
                    <h3>Результат: {percentResult}%</h3>
                    <h4>Оценка: {appraisalResult}</h4>
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
    clearListAnswers,
    sendListAnswer
}

export default connect(mapStateToProps,mapDispatchToProps)(TestResult);
