import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import {connect} from "react-redux";

import { request } from "../../helpers/http";

import {baseUrl} from "../../config";

import Student from "./Student"
import Teacher from "./Teacher";

import {useMessage} from "../../hooks/message.hook";

import './reg.scss'


const Reg = () => {
    const history = useHistory();
    const message = useMessage()

    const [isStudent, setIsStudent] = useState(true)

    const clickStudent = () => setIsStudent(true)
    const clickTeacher = () => setIsStudent(false)

    const onClickButtonStudent = (student) => {
        // console.log(student)
        try{
            const data = request(`${baseUrl}/user/singUp`,'POST',student)
            if (data){
                message('Регистрация прошла успшно')
            }
        }catch (e){
            message(e.message || 'Ошибка регистрации')
        }
        history.push("/auth")
    }
    /*const onClickButtonTeacher = (teacher) => {
        console.log('teacher', teacher)
        history.push("/auth")
        message('Регистрация прошла успшно')
    }*/

    return (
        <div>
            <div className="reg">
                <div className="container">
                    <h2 className="reg_header">Регистрация</h2>
                    {/*<div className="reg_buttons">
                        <button className={`buttonAll reg_buttons_btn ${isStudent ? "reg_buttons_btn_focus" : ""}`}
                                onClick={clickStudent}>Студент
                        </button>
                        <button className={`buttonAll reg_buttons_btn ${isStudent ? "" : "reg_buttons_btn_focus"}`}
                                onClick={clickTeacher}>Преподователь
                        </button>
                    </div>*/}

                    <Student onClickButtonStudent={onClickButtonStudent}/>
                    {/*{
                        isStudent ?
                            <Student onClickButtonStudent={onClickButtonStudent}/>
                            :
                            <Teacher onClickButtonTeacher={onClickButtonTeacher}/>
                    }*/}
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.app.loading,
    error: state.app.error,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(Reg)