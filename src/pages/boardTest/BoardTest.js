import React from 'react';
import { useHistory } from "react-router-dom";

import { Header } from "../../componets/header/Header";

import "./boardTest.css"

const BoardTest = () => {
    const history = useHistory();

    const onClickBtnBegin = () => {
        history.push('/auth')
    }

    return (
        <>
            <Header />
            <div className="row containerBoardTest">

                <div className="col s3 navBoardTests">

                    <div className="cardNavBoardTest"  onClick={() => console.log('click test math')}>
                        <h3 className="h3NavBoardTest">Math</h3>
                        <p className="pNavBoardTest">teacher</p>
                    </div>
                </div>


                <div className="col s9 containerInfoBoardTests">
                    <div className="titleInfoBoardTests">
                        <h2 className="titleInfoBoardTests">Math</h2>
                    </div>

                    <div className="container subContainerInfoBoardTests">

                        <table className="striped tableInfoBoardTests">

                            <tbody>
                            <tr>
                                <td>teacher</td>
                                <td>$0.87</td>
                            </tr>
                            <tr>
                                <td>time</td>
                                <td>$3.76</td>
                            </tr>
                            <tr>
                                <td>questions</td>
                                <td>$7.00</td>
                            </tr>
                            <tr>
                                <td>subject</td>
                                <td>$7.00</td>
                            </tr>
                            <tr>
                                <td>complexity</td>
                                <td>$7.00</td>
                            </tr>
                            <tr>
                                <td>date</td>
                                <td>$7.00</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="buttonContainerInfoBoardTests">
                        <button className="buttonAll buttonInfoBoardTests" onClick={onClickBtnBegin}>begin</button>
                    </div>

                </div>

            </div>
        </>
    );
};

export default BoardTest;