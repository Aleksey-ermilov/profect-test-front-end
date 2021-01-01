import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { tests } from "../../data"

import { Header } from "../../componets/header/Header";
import CardNavTest from "./CardNavTest";
import TestInfo from "./TestInfo";

import './boardTest.scss'

const BoardTest = () => {
    const history = useHistory();

    const [ currentTest, setCurrentTest ] = useState(tests[0])

    const onClickBtnBegin = () => {
        history.push({
            pathname: '/test',
            state: { test: currentTest }
        });
        // history.push('/auth')
    }
    const onClickNavTest = (test) => {
        setCurrentTest(test)
    }

    return (
        <div>
            <Header />
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
        </div>
    );
};

export default BoardTest;