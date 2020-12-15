import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./componets/header/Header";

import './App.css';

function App() {
  return (
    <div className="App">

        <BrowserRouter>


            <Header />
            {/*<Route path={'/'} component={Page1} exact />*/}
            {/*<Route path={'/page2'} component={Page2} exact />*/}

        </BrowserRouter>

    </div>
  );
}

export default App;
