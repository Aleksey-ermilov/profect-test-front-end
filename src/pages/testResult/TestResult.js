import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { observer } from 'mobx-react'
import testStory  from '../../store/test'

import Loader from "../../componets/loader/Loader";
import { Header } from "../../componets/header/Header";

import './testResult.scss'

const TestResult = observer(() => {
    const history = useHistory();

    const [percentResult, setPercentResult] = useState(0)

    useEffect(() => {
        const { questions } = testStory.test

        let sumPointCorrect = 0
        questions.forEach( item => {
            sumPointCorrect += item.pointsForCorrectAnswer
        })

        const result = []
        testStory.getListAnswers.forEach( (v, k) => {
            const question = questions.find( q => q.id === k)
            const point = question.answers.find( a => a.id === v).pointCorrect
            result.push(point)
        })
        const sumResult = result.reduce((accumulator, currentValue) => accumulator + currentValue)

        setPercentResult(sumResult * 100 / sumPointCorrect)

    }, []);

    const handlerBtn = () => {
        history.push({
            pathname: '/boardTest',
        });
        testStory.clearMap()
    }

    if (testStory.test === null) {
        return (<Loader/>)
    }

    return (
        <div>
            <Header />
            <div className="testResult">
                <div className="testResult_boxResult">
                    <h3>Результат: {percentResult}%</h3>
                    <h4>Оценка: ...</h4>
                    <button className="buttonAll testResult_boxResult_btn" onClick={handlerBtn}>Назад</button>
                </div>
            </div>
        </div>
    )
});

export default TestResult;