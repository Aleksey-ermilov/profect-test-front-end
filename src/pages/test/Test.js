import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loader from "../../componets/loader/Loader";

import './test.scss'
import M from "materialize-css"

import {Header} from "../../componets/header/Header";

const Test = props => {
    const location = useLocation();

    const [test, setTest] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    useEffect(() => {
        // console.log(location.pathname); // result: '/secondpage'
        // console.log(location.search); // result: '?query=abc'
        console.log(location.state.test); // result: 'some_value'

        // setTimeout(() => setTest(location.state.test),1000)
        const { test } = location.state
        setTest(test)
        setSelectedQuestion(test.questions[0])

        let dropDown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropDown, {});

        let el = document.querySelectorAll('.tabs');
        M.Tabs.init(el, {})
    }, [location]);

    const onClickPagination = question => {
        setSelectedQuestion(question)
    }

    if ( test === null ){ return (<Loader />) }

    return (
        <div>
            <Header />
            <div className="test">
                <p>Test!</p>
                <div className="container">
                    <ul className="pagination test_pagination">
                        {
                            test.questions.map( (item,index) => {
                                return (
                                    <li
                                        key={item.id}
                                        className={`${selectedQuestion.id === item.id ? 'active' : 'waves-effect'}`}
                                        onClick={ () => onClickPagination(item)}
                                    >{index + 1}</li>
                                )
                            })
                        }
                    </ul>

                    <div>
                        {selectedQuestion.textQuestion}
                    </div>

                </div>
            </div>
        </div>
    )

};

export default Test;