import React, { useState } from 'react';

const Student = ({onClickButtonStudent}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [group, setGroup] = useState('')
    const [course, setCourse] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [pass, setPass] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
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
        <form className="reg_form" onSubmit={onSubmit}>
            <div className="row">
                <div className="input-field col s6">
                    <input
                        id="name"
                        type="text"
                        className="validate"
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                    />
                    <label htmlFor="name">Имя</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="email"
                        type="email"
                        className="validate"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="group"
                        type="text"
                        className="validate"
                        value={group}
                        onChange={ (e) => setGroup(e.target.value)}
                    />
                    <label htmlFor="group">Группа</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="course"
                        type="text"
                        className="validate"
                        value={course}
                        onChange={ (e) => setCourse(e.target.value)}
                    />
                    <label htmlFor="course">Курс</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="specialty"
                        type="text"
                        className="validate"
                        value={specialty}
                        onChange={ (e) => setSpecialty(e.target.value)}
                    />
                    <label htmlFor="specialty">Специальность</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="pass"
                        type="password"
                        className="validate"
                        value={pass}
                        onChange={ (e) => setPass(e.target.value)}
                    />
                    <label htmlFor="pass">Пароль</label>
                </div>
            </div>
            <button className="buttonAll reg_form_btn_submit" type="submit" >Зарегистрироваться</button>
        </form>
    );
};

export default Student;