import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./componets/header/Header";
import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";

import './App.css';

function App() {
  return (
    <div className="App">
        {/*<div className="MainDiv">*/}
            <BrowserRouter >



                <Route path={'/auth'} component={Auth} exact />
                <Route path={'/reg'} component={Reg} exact />

            </BrowserRouter>
        {/*</div>*/}



    </div>
  );
}

export default App;
