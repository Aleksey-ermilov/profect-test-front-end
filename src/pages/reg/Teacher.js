import React, {useState} from 'react';

const Teacher = ({onClickButtonTeacher}) => {

    const [form, setForm] = useState({
        name:'', email:'',subject:'',pass:'',
    })

    const changeHandler = e => {
        setForm({...form, [e.target.name]:e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const teacher = {
            ...form,
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
                        name={"name"}
                        type="text"
                        className="validate"
                        onChange={changeHandler}
                    />
                    <label htmlFor="name">Имя</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="email"
                        name={'email'}
                        type="email"
                        className="validate"
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="subject"
                        name={'subject'}
                        type="text"
                        className="validate"
                        onChange={changeHandler}
                    />
                    <label htmlFor="subject">Предмет</label>
                </div>
                <div className="input-field col s6">
                    <input
                        id="pass"
                        name={'pass'}
                        type="password"
                        className="validate"
                        onChange={changeHandler}
                    />
                    <label htmlFor="pass">Пароль</label>
                </div>
            </div>
            <button className="buttonAll reg_form_btn_submit " type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Teacher;