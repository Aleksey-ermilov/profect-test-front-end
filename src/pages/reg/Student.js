import React, { useState } from 'react';

const Student = ({onClickButtonStudent}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [group, setGroup] = useState('')
    const [course, setCourse] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')

    const onClickButton = () => {
        const student = {
            name,
            email,
            group,
            course,
            specialty,
            pass,
            user: 'student'
        }
        onClickButtonStudent(student)
    }

    return (
        <>
            <div className=" containerInputReg input-field col s6">
                <input
                    className="validate inputReg"
                    placeholder="Имя"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}/>
            </div>
            <div className=" containerInputReg input-field col s6">
                <input
                    type="email"
                    className="validate inputReg"
                    placeholder="Email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div className=" containerInputReg input-field col s6">
                <input
                    className="validate inputReg"
                    placeholder="Группа"
                    value={group}
                    onChange={ (e) => setGroup(e.target.value)}/>
            </div>
            <div className=" containerInputReg input-field col s6">
                <input
                    className="validate inputReg"
                    placeholder="Курс"
                    value={course}
                    onChange={ (e) => setCourse(e.target.value)} />
            </div>
            <div className=" containerInputReg input-field col s6">
                <input
                    className="validate inputReg"
                    placeholder="Специальность"
                    value={specialty}
                    onChange={ (e) => setSpecialty(e.target.value)}/>
            </div>
            <div className=" containerInputReg input-field col s6">
                <input
                    type="password"
                    className="validate inputReg"
                    placeholder="Пароль"
                    value={pass}
                    onChange={ (e) => setPass(e.target.value)}/>
            </div>
            <div className=" containerInputReg input-field col s6">
                <input
                    type="password"
                    className="validate inputReg"
                    placeholder="Повториь, пароль"
                    value={rePass}
                    onChange={ (e) => setRePass(e.target.value)}/>
            </div>
            <button className="buttonAll buttonReg " onClick={onClickButton}>Зарегистрироваться</button>
        </>
    );
};

export default Student;