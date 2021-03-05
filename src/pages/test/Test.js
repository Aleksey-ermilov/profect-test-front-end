import React, {useEffect, useState} from "react";
import { useHistory} from "react-router-dom";
import { connect } from 'react-redux'

import Pagination from "../../componets/pagination/Pagination";
import _Timer from "../../componets/timer/Timer";
import Answer from "../../componets/answer/Answer";

import {useMessage} from "../../hooks/message.hook";

import {setListAnswers} from "../../store/redux/test/actionsTest";

import './test.scss'

const Test = ({currentTest,error, listAnswers, setListAnswers}) => {
    const history = useHistory();
    const message = useMessage()

    const [selectedQuestion, setSelectedQuestion] = useState(currentTest.questions[0])

    useEffect(()=> {
        message(error)
    },[error,message])

    const onClickPagination = question => {
        setSelectedQuestion(question)
    }

    const endTest = () => {
        // history.push({
        //     pathname: '/boardTest'
        // });
        message('Время вышло! Тест провален!!!')
    }

    const onAnswers = (answer) => {
        const ans = listAnswers.find( item => item.question === answer.question )
        if (ans){
            setListAnswers (
                listAnswers.map( item => {
                    if (item.question === answer.question){
                        item.answer = answer.answer
                    }
                        return item
                })
            )
        }else {
            setListAnswers ([ ...listAnswers, answer ])
        }
    }

    const selectedAnswer = () => {
        const selectedAnswer = listAnswers.find( item => item.question === selectedQuestion.id)
        return selectedAnswer ? selectedAnswer.answer : ''
    }

    const titleBtn = () => {
        return listAnswers.length === currentTest.questions.length ? 'Завершить Тест' : 'Далее'
    }

    const onSubmit = () => {
        if(listAnswers.length === currentTest.questions.length){
            history.push({
                pathname: '/testResult'
            });
        }
        const { questions } = currentTest
        questions.find( item => {
            const ans = listAnswers.find( la => la.question === item.id )
            if( !ans ){
                setSelectedQuestion(item)
                return true
            }
            return false
        })
    }

    return (
            <div className="test">
                <div className="test_timer">
                    <_Timer
                        time={currentTest.timeTest * 1000 }
                        callback={endTest}
                    />
                </div>
                <div className="container">
                    <div className="test_pgt">
                        <Pagination
                            list={currentTest.questions}
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
    )

};

const mapStateToProps = state => ({
    currentTest: state.test.currentTest,
    listAnswers: state.test.listAnswers,
    error: state.app.error,
})

const mapDispatchToProps = {
    setListAnswers
}

export default connect(mapStateToProps,mapDispatchToProps)(Test);
