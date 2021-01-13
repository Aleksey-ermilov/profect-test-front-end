import React, {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";

import { observer } from 'mobx-react'
import test from '../../store/test'

import {Header} from "../../componets/header/Header";
import Loader from "../../componets/loader/Loader";
import Pagination from "../../componets/pagination/Pagination";
import _Timer from "../../componets/timer/Timer";
import Answer from "../../componets/answer/Answer";

import './test.scss'

const Test = observer (props => {
    const location = useLocation();
    const history = useHistory();

    const [test, setTest] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const [listAnswers, setListAnswers] = useState([])

    useEffect(() => {
        // console.log(location.pathname);
        // console.log(location.search);
        console.log(location.state.test);

        // setTimeout(() => setTest(location.state.test),1000)
        const {test} = location.state
        setTest(test)
        setSelectedQuestion(test.questions[0])

    }, [location]);

    const onClickPagination = question => {
        setSelectedQuestion(question)
    }

    const endTest = () => {
        // history.push({
        //     pathname: '/boardTest'
        // });
    }

    const onAnswers = (answer) => {
        setListAnswers(prev => {
            const keys = prev.map(item => Object.keys(item)[0])
            const index = keys.indexOf(Object.keys(answer)[0])
            if (index === -1) {
                return [...prev, answer]
            }

            return [...prev.slice(0, index), answer, ...prev.slice(index + 1)]
        })
    }

    const selectedAnswer = () => {
        const keys = listAnswers.map(item => Object.keys(item)[0])
        const index = keys.indexOf(selectedQuestion.id)
        return listAnswers[index] || ''
    }

    const titleBtn = () => {
        if(listAnswers.length === test.questions.length){
            return 'Завершить Тест'
        }

        return 'Далее'
    }

    const onSubmit = () => {
        if(listAnswers.length === test.questions.length){
            history.push({
                pathname: '/testResult',
                state: { result: listAnswers, test }
            });
        }
        const { questions } = test

        const keys = listAnswers.map(item => Object.keys(item)[0])
        questions.find(item => {
            const index = keys.indexOf(item.id)
            if (index === -1) {
                setSelectedQuestion(item)
                return true
            }
            return false
        })
    }

    if (test === null) {
        return (<Loader/>)
    }

    return (
        <div>
            <Header/>
            <div className="test">
                <div className="test_timer">
                    <_Timer
                        time={test.timeTest * 1000}
                        callback={endTest}
                    />
                </div>
                {/*<p>{test.subject}</p>*/}
                <div className="container">
                    <div className="test_pgt">
                        <Pagination
                            list={test.questions}
                            selected={selectedQuestion}
                            onClick={onClickPagination}
                        />
                    </div>

                    <p className="test_question">{selectedQuestion.textQuestion}</p>

                    <div className="test_answers">
                        <Answer
                            question={selectedQuestion}
                            selectedAnswer={selectedAnswer()}
                            titleBtn={titleBtn()}
                            onAnswer={onAnswers}
                            onSubmit={onSubmit}
                        />
                    </div>

                </div>
            </div>
        </div>
    )

});

export default Test;