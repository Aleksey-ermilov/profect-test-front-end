import React from 'react';
import { useHistory } from "react-router-dom";

import { observer } from 'mobx-react'
import testStory from '../../store/test'

import { tests } from "../../data"

import { Header } from "../../componets/header/Header";
import CardNavTest from "./CardNavTest";
import TestInfo from "./TestInfo";

import './boardTest.scss'

const BoardTest = observer(() => {
    const history = useHistory();

    const onClickBtnBegin = () => {
        history.push({
            pathname: '/test'/*,
            state: { test: currentTest }*/
        });
        // history.push('/auth')
    }
    const onClickNavTest = (test) => {
        testStory.setTest(test)
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
                                    currentTestId={testStory.test.id}
                                    key={test.id}
                                />
                            )
                        }

                    </div>


                    <div className="col s9 l10 containerInfoBoardTests board_info">
                        <TestInfo
                            onClickBtnBegin={onClickBtnBegin}
                            item={testStory.test}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
})

export default BoardTest;