import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

// import { nanoid } from "nanoid";

import Example from "./pages/example/Example";

import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";
import BoardTest from "./pages/boardTest/BoardTest";
import Test from "./pages/test/Test";

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

            </BrowserRouter>



    </div>
  );
}

export default App;
