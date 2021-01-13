import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";

import Loader from "../../componets/loader/Loader";

import './testResult.scss'

const TestResult = () => {
    const location = useLocation();
    const history = useHistory();

    const [result, setResult] = useState(null)
    const [test, setTest] = useState(null)

    useEffect(() => {
        console.log(location.state.result);
        const { result, test } = location.state
        setResult(result)
        setTest(test)
    }, [location]);

    const handlerBtn = () => {
        history.push({
            pathname: '/boardTest',
        });
    }

    const resultHandler = () => {
        const { questions } = test
        const keys = result.map(item => Object.keys(item)[0])
        const values = result.map(item => Object.values(item)[0])

        const listPoint = []
        listPoint.push(
            keys.map( k => {
                const q = questions.find( q => q.id === k)
                return values.map( v => {

                    if ( q.answers.find( a => a.id === v ) ){
                        console.log(q.answers.find( a => a.id === v ))
                        return q.answers.find( a => a.id === v ).pointCorrect
                    }
                    return null
                })
            })
        )
        console.log(listPoint)
    }


    if (result === null) {
        return (<Loader/>)
    }

    resultHandler()

    return (
        <div>
            Test Result
            <button onClick={handlerBtn}>Back!</button>
        </div>
    );
};

export default TestResult;