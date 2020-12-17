import React from 'react'
import { Link, useHistory } from "react-router-dom";

import './auth.css'

export const Auth = () => {
    const history = useHistory();

    const onClickBtnLogin = () => {
        history.push('/boardTest')
    }

    return (
        <div className="flexAuth">
            <div className="backgroundAuth">
                <h1 className="titleAuth">Тестилка “Незнайка”</h1>
                <div className="containerAuth">
                    <h2 className="h2Auth">Войти в Систему</h2>
                    <div className="containerInputsAuth">
                        <div className=" containerInputAuth input-field col s6">
                            <i className="material-icons prefix iconAuth">email</i>
                            <input type="tel" className="validate inputAuth" placeholder="Логи" />
                        </div>
                        <div className=" containerInputAuth input-field col s6">
                            <i className="material-icons prefix iconAuth">lock</i>
                            <input type="tel" className="validate inputAuth" placeholder="Пароль" />
                        </div>
                        <div className="containerLinkAuth">
                            <Link to={"/pass"} >Забыл пароль?</Link>
                            <Link to={"/reg"}>Зарегистрироваться</Link>
                        </div>
                    </div>

                    <button className="buttonAll buttonAuth" onClick={onClickBtnLogin}>Войти</button>

                </div>
            </div>

        </div>
    )
}