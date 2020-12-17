import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";
import BoardTest from "./pages/boardTest/BoardTest";

import './App.css';

function App() {
  return (
    <div className="App">
        {/*<div className="MainDiv">*/}
            <BrowserRouter >



                <Route path={'/auth'} component={Auth} exact />
                <Route path={'/reg'} component={Reg} exact />
                <Route path={'/boardTest'} component={BoardTest} exact />

            </BrowserRouter>
        {/*</div>*/}



    </div>
  );
}

export default App;
