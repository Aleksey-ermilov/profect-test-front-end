import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loader from "../../componets/loader/Loader";
import Pagination from "../../componets/pagination/Pagination";

import './test.scss'
import M from "materialize-css"

import {Header} from "../../componets/header/Header";

const Test = props => {
    const location = useLocation();

    const [test, setTest] = useState(null)
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const [time, setTime] = useState(10)



    useEffect(() => {
        // console.log(location.pathname);
        // console.log(location.search);
        console.log(location.state.test);

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
                <p>{test.subject}</p>
                <div className="container">
                    <Pagination
                        list={test.questions}
                        selected={selectedQuestion}
                        onClick={onClickPagination}
                    />
                    <div>
                        {selectedQuestion.textQuestion}
                    </div>

                </div>
            </div>
        </div>
    )

};

export default Test;