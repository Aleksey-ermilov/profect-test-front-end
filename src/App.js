import React, {useEffect} from 'react'
import {BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux'

import { rerun } from "./store/redux/user/actionUser";

import useRoutes from "./routes";

import Header from "./componets/header/Header";
import Loader from "./componets/loader/Loader";

import {localStorageGetUser} from "./store/localStorage";

import './App.scss';
import M from "materialize-css";

function App({ token, rerun }) {
    const isAuthenticated = !!token
    const route = useRoutes(isAuthenticated)

    useEffect(()=>{
        // M.AutoInit()
        const user = localStorageGetUser()
        if (user){
            rerun(user.token,user.user)
        }
    },[])

    const showHeader = () => {
        if (isAuthenticated){
            return <Header />
        }
    }

    return (
            <div>

                <BrowserRouter>
                    {showHeader()}
                    {route}
                </BrowserRouter>
            </div>
    );
}

const mapStateToProps = state => ({
    loading: state.app.loading,
    error: state.app.error,
    token: state.user.token
})

const mapDispatchToProps = {
    rerun
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
