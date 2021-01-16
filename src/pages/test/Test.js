import React, { useState} from "react";
import { useHistory} from "react-router-dom";

import { observer } from 'mobx-react'
import testStory from '../../store/test'

import {Header} from "../../componets/header/Header";
import Loader from "../../componets/loader/Loader";
import Pagination from "../../componets/pagination/Pagination";
import _Timer from "../../componets/timer/Timer";
import Answer from "../../componets/answer/Answer";

import './test.scss'

const Test = observer (props => {
    const history = useHistory();

    const [selectedQuestion, setSelectedQuestion] = useState(testStory.test.questions[0])

    const onClickPagination = question => {
        setSelectedQuestion(question)
    }

    const endTest = () => {
        // history.push({
        //     pathname: '/boardTest'
        // });
    }

    const onAnswers = (answer) => {
        testStory.setListAnswers(answer[0],answer[1])
    }

    const selectedAnswer = () => {
        return testStory.getListAnswers.get(selectedQuestion.id)
    }

    const titleBtn = () => {
        return testStory.getListAnswers.size === testStory.test.questions.length ? 'Завершить Тест' : 'Далее'
    }

    const onSubmit = () => {
        if(testStory.getListAnswers.size === testStory.test.questions.length){
            history.push({
                pathname: '/testResult'
            });
        }
        const { questions } = testStory.test
        questions.find( item => {
            if (!testStory.getListAnswers.has(item.id)){
                setSelectedQuestion(item)
                return true
            }
            return false
        })
    }

    if (testStory.test === null) {
        return (<Loader/>)
    }

    return (
        <div>
            <Header/>
            <div className="test">
                <div className="test_timer">
                    <_Timer
                        time={testStory.test.timeTest * 1000}
                        callback={endTest}
                    />
                </div>
                <div className="container">
                    <div className="test_pgt">
                        <Pagination
                            list={testStory.test.questions}
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