import React from 'react'

import './reg.css'
import {Header} from "../../componets/header/Header";

export const Reg = () => {
    return (
        <div className="maxHeight">
            <Header />
            <div className="container containerReg">
                <h2>Регистрация</h2>
                <div className="containerButtonUserReg">
                    <button className="buttonAll buttonUserReg">Студент</button>
                    <button className="buttonAll buttonUserReg">Преподователь</button>
                </div>

                <div>
                    <div className=" containerInputReg input-field col s6">
                        <input className="validate inputReg" placeholder="Имя" />
                    </div>
                    <div className=" containerInputReg input-field col s6">
                        <input type="email" className="validate inputReg" placeholder="Email" />
                    </div>
                    <div className=" containerInputReg input-field col s6">
                        <input className="validate inputReg" placeholder="Группа" />
                    </div>
                    <div className=" containerInputReg input-field col s6">
                        <input className="validate inputReg" placeholder="Курс" />
                    </div>
                    <div className=" containerInputReg input-field col s6">
                        <input className="validate inputReg" placeholder="Специальность" />
                    </div>
                    <div className=" containerInputReg input-field col s6">
                        <input type="password" className="validate inputReg" placeholder="Пароль" />
                    </div>
                    <div className=" containerInputReg input-field col s6">
                        <input type="password" className="validate inputReg" placeholder="Повториь, пароль" />
                    </div>
                </div>

                <button className="buttonAll buttonReg ">Зарегистрироваться</button>
            </div>

        </div>
    )
}