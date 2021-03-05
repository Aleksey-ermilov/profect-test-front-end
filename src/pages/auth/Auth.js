import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";

import {showError} from "../../store/redux/app/actionApp";
import {login} from "../../store/redux/user/actionUser";

import './auth.scss'

const Auth = ({loading,error,login}) => {
    const history = useHistory();
    const message = useMessage()

    const [form, setForm] = useState({
       email:'', password:'',
    })

    useEffect(()=> {
        message(error)
    },[error,message])

    const changeHandler = e => {
        setForm({...form, [e.target.name]:e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        //checked on empty

        login(form)

        history.push('/boardTest')
        console.log('auth', form)
    }

    return (
        <div className="auth">
            <h1 className="auth_title">Тестилка “Незнайка”</h1>
            <form className="auth_form" onSubmit={onSubmit}>
                <h2 className="auth_form_header">Войти в Систему</h2>

                <div className="auth_form_inputs" >
                    <div className="row">
                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input
                                id="email"
                                name={'email'}
                                type="email"
                                className="validate"
                                onChange={changeHandler}
                            />
                                <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input
                                id="password"
                                name={'password'}
                                type="password"
                                className="validate"
                                onChange={changeHandler}
                            />
                                <label htmlFor="password">Пароль</label>
                        </div>
                        <div className="auth_form_inputs_linc">
                            <Link to={"/pass"} >Забыл пароль?</Link>
                            <Link to={"/reg"}>Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>

                <button
                    className="buttonAll auth_form_button"
                    type="submit"
                    disabled={loading}
                >Войти</button>

            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.app.loading,
    error: state.app.error,
})

const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)