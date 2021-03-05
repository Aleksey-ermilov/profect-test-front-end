import React, {useEffect} from 'react';
import { connect } from 'react-redux'

import './example.scss'

import {createTest, fetchedPost} from "../../store/redux/test/actionsTest";
import {showError} from "../../store/redux/app/actionApp";
import {login, logout} from "../../store/redux/user/actionUser";
import {useMessage} from "../../hooks/message.hook";

const Example = ({tests, loading, error, token, createTest, fetchedPost, showError, login,logout}) => {

    const message = useMessage()

    useEffect(()=> {
        message(error)
    },[error,message])

    const clickHandler = () => {
        createTest({id:1,name:'History'})
    }

    const showTestHandler = () => {
        console.log('tests',tests)
    }

    const fetchedHandler = () => {
        fetchedPost()
    }

    const errorHandler = () => {
        showError('error')
    }

    const loginHandler = () => {
        login({
            email: "Alex123@mail.ru",
            password:"111"
        })
    }
    const logoutHandler = () => {
        logout()
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>example</p>
            <button onClick={clickHandler}>create test</button>
            <button onClick={showTestHandler}>show test</button>
            <button onClick={fetchedHandler}>fetched</button>
            <button onClick={errorHandler}>ERROR</button>
            {
                !token ?
                    <button onClick={loginHandler}>LOGIN</button>
                    :
                    <button onClick={logoutHandler}>LOGOUT</button>
            }
        </div>

    );
} ;

const mapStateToProps = state => ({
    tests: state.test.tests,
    loading: state.app.loading,
    error: state.app.error,
    token: state.user.token
})

const mapDispatchToProps = {
    createTest,
    fetchedPost,
    showError,
    login,
    logout,
}

export default connect(mapStateToProps,mapDispatchToProps)(Example);
