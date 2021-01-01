import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

import './auth.scss'

export const Auth = () => {
    const history = useHistory();

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        //checked on empty
        history.push('/boardTest')
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
                                type="email"
                                className="validate"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                                <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input
                                id="icon_telephone"
                                type="password"
                                className="validate"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                                <label htmlFor="icon_telephone">Пароль</label>
                        </div>
                        <div className="auth_form_inputs_linc">
                            <Link to={"/pass"} >Забыл пароль?</Link>
                            <Link to={"/reg"}>Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>

                <button className="buttonAll auth_form_button" type="submit">Войти</button>

            </form>
        </div>
    )
}