import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import CardNavTest from "./CardNavTest";
import TestInfo from "./TestInfo";
import Loader from "../../componets/loader/Loader";

import {fetchedTests, selectedTest} from "../../store/redux/test/actionsTest";
import {useMessage} from "../../hooks/message.hook";

import './boardTest.scss'

const BoardTest = ({error, tests, currentTest, fetchedTests, selectedTest}) => {
    const history = useHistory();
    const message = useMessage()

    useEffect( () => {
        fetchedTests()
    },[])

    useEffect(()=> {
        message(error)
    },[error,message])

    const onClickBtnBegin = () => {
        history.push({
            pathname: '/test'
        });
    }
    const onClickNavTest = (test) => {
        selectedTest(test)
    }

    if (!tests.length ){
        return <Loader />
    }

    return (

            <div className="board">
                <div className="row mrgb-0">

                    <div className="col s3 l2 board_nav">

                        {
                            tests.map( test =>
                                <CardNavTest
                                    item={test}
                                    onSelect={onClickNavTest}
                                    currentTestId={currentTest.id}
                                    key={test.id}
                                />
                            )
                        }

                    </div>


                    <div className="col s9 l10 containerInfoBoardTests board_info">
                            <TestInfo
                                onClickBtnBegin={onClickBtnBegin}
                                item={currentTest}
                            />
                    </div>

                </div>
            </div>

    );
}

const mapStateToProps = state => ({
    tests: state.test.tests,
    currentTest: state.test.currentTest,
    // loading: state.app.loading,
    error: state.app.error,
})

const mapDispatchToProps = {
    fetchedTests,
    selectedTest
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardTest);