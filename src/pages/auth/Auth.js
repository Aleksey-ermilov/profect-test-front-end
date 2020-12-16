import React from 'react'
import { Link } from "react-router-dom";

import './auth.css'

export const Auth = () => {
    return (
        <div className="flex">
            <div className="background">
                <h1 className="title">Тестилка “Незнайка”</h1>
                <div className="containerAuth">
                    <h2 className="h2">Войти в Систему</h2>
                    <div className="containerInputs">
                        <div className=" containerInput input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input type="tel" className="validate inputAuth" placeholder="Логи" />
                        </div>
                        <div className=" containerInput input-field col s6">
                            <i className="material-icons prefix">lock</i>
                            <input type="tel" className="validate inputAuth" placeholder="Пароль" />
                        </div>
                        <div className="containerLink">
                            <Link to={"/pass"} >Забыл пароль?</Link>
                            <Link to={"/reg"}>Зарегистрироваться</Link>
                        </div>
                    </div>

                    <button className="buttonAll buttonAuth">Войти</button>

                </div>
            </div>

        </div>
    )
}