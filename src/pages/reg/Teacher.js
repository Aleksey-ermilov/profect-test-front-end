import React, {useState} from 'react';

const Teacher = ({onClickButtonTeacher}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [pass, setPass] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
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
                        id="subject"
                        type="text"
                        className="validate"
                        value={subject}
                        onChange={ (e) => setSubject(e.target.value)}
                    />
                    <label htmlFor="subject">Предмет</label>
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
            <button className="buttonAll reg_form_btn_submit " type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Teacher;