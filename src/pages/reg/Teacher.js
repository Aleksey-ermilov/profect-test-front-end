import React, {useState} from 'react';

const Teacher = ({onClickButtonTeacher}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [pass, setPass] = useState('')
    const [rePass, setRePass] = useState('')

    const onClickButton = () => {
        const teacher = {
            name,
            email,
            subject,
            pass,
            user: 'teacher'
        }
        onClickButtonTeacher(teacher)
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
                    placeholder="Предмет"
                    value={subject}
                    onChange={ (e) => setSubject(e.target.value)}/>
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

export default Teacher;