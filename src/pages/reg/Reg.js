import React, {useState} from 'react'

import './reg.css'
import {Header} from "../../componets/header/Header";
import Student from "./Student"
import Teacher from "./Teacher";

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
        <div className="maxHeight">
            <Header/>
            <div className="container containerReg">
                <h2>Регистрация</h2>
                <div className="containerButtonUserReg">
                    <button className={`buttonAll buttonUserReg ${isStudent ? "buttonUserRegFocus" : ""}`}
                            onClick={clickStudent}>Студент
                    </button>
                    <button className={`buttonAll buttonUserReg ${isStudent ? "" : "buttonUserRegFocus"}`}
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
    )
}