import React, {useState} from 'react'

import {Header} from "../../componets/header/Header";
import Student from "./Student"
import Teacher from "./Teacher";

import './reg.scss'

export const Reg = () => {
    const [isStudent, setIsStudent] = useState(true)

    const clickStudent = () => setIsStudent(true)
    const clickTeacher = () => setIsStudent(false)

    const onClickButtonStudent = (student) => {
        console.log('student', student)
    }
    const onClickButtonTeacher = (teacher) => {
        console.log('teacher', teacher)
    }

    return (
        <div>
            <Header/>
            <div className="reg">
                <div className="container">
                    <h2 className="reg_header">Регистрация</h2>
                    <div className="reg_buttons">
                        <button className={`buttonAll reg_buttons_btn ${isStudent ? "reg_buttons_btn_focus" : ""}`}
                                onClick={clickStudent}>Студент
                        </button>
                        <button className={`buttonAll reg_buttons_btn ${isStudent ? "" : "reg_buttons_btn_focus"}`}
                                onClick={clickTeacher}>Преподователь
                        </button>
                    </div>

                    {
                        isStudent ?
                            <Student onClickButtonStudent={onClickButtonStudent}/>
                            :
                            <Teacher onClickButtonTeacher={onClickButtonTeacher}/>
                    }
                </div>
            </div>

        </div>
    )
}