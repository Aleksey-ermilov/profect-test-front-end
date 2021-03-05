import React from 'react';

import './textInput.scss'

const TextInput = ({id, type = 'text', onChange, placeholder, style}) => {
    return (
        <div className={`input-field ${style}`}>
            <input
                id={id}
                name={id}
                type={type}
                className="validate"
                onChange={onChange}
            />
            <label htmlFor={id}>{placeholder}</label>
        </div>
    );
};

export default TextInput;