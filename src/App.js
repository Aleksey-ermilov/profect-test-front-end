import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

// import { nanoid } from "nanoid";

import Example from "./pages/example/Example";

import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";
import BoardTest from "./pages/boardTest/BoardTest";
import Test from "./pages/test/Test";
import StudentStory from "./pages/studentStory/StudentStory";
import TestResult from "./pages/testResult/TestResult";
import EditUser from "./pages/editUser/EditUser";

import './App.scss';

function App() {
    // let id = nanoid()
    // console.log(id)
  return (
    <div>
            <BrowserRouter >

                <Route path={'/'} component={Example} exact />

                <Route path={'/auth'} component={Auth} exact />
                <Route path={'/reg'} component={Reg} exact />
                <Route path={'/boardTest'} component={BoardTest} exact />
                <Route path={'/test'} component={Test} exact />
                <Route path={'/studentStory'} component={StudentStory} exact />
                <Route path={'/testResult'} component={TestResult} exact />
                <Route path={'/editUser'} component={EditUser} exact />

            </BrowserRouter>



    </div>
  );
}

export default App;
