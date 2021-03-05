import React, { useState } from 'react';

import TextInput from "../../componets/textInput/TextInput";

const Student = ({onClickButtonStudent}) => {
    const [form, setForm] = useState({
        email:'', name:'', group:'',faculty:'',specialty:'',password:'', role: 'student', avatar: '3'
    })

    const changeHandler = e => {
        setForm({...form, [e.target.name]:e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onClickButtonStudent(form)
    }

    return (
        <form className="reg_form" onSubmit={onSubmit}>

            <div className="row">
                <TextInput
                    id={'name'}
                    onChange={changeHandler}
                    placeholder={'Имя'}
                    // style={'col s6'}
                />
                <TextInput
                    id={'email'}
                    onChange={changeHandler}
                    type={'email'}
                    placeholder={'Email'}
                    // style={'col s6'}
                />
                <TextInput
                    id={'group'}
                    onChange={changeHandler}
                    placeholder={'Группа'}
                    // style={'col s6'}
                />
                <TextInput
                    id={'faculty'}
                    onChange={changeHandler}
                    placeholder={'Факультет'}
                    // style={'col s6'}
                />
                <TextInput
                    id={'specialty'}
                    onChange={changeHandler}
                    placeholder={'Специальность'}
                    // style={'col s6'}
                />
                <TextInput
                    id={'password'}
                    onChange={changeHandler}
                    type={'password'}
                    placeholder={'Пароль'}
                    // style={'col s6'}
                />
            </div>
            <button className="buttonAll reg_form_btn_submit" type="submit" >Зарегистрироваться</button>
        </form>
    );
};

export default Student;