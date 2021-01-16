import React, {useState,useEffect} from 'react';

import './answer.scss'

const Answer = ({question, selectedAnswer, titleBtn, onAnswer, onSubmit }) => {
    const [ans, setAns] = useState('')

    useEffect( () => {
        setAns(selectedAnswer)
    },[question])

    const inputHandler = (e) => {
        const answer = e.target.value
        const listAnswers = [question.id, answer ]
        onAnswer(listAnswers)
        setAns(answer)
    }

    const handlerForm = (e) => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <form onSubmit={handlerForm} className="answer_form">

            {
                question.answers.map( answer =>
                    <p key={answer.id}>
                        <label>
                            <input
                                name={question.id}
                                type="radio"
                                value={answer.id}
                                checked={ans === answer.id}
                                onChange={inputHandler}
                            />
                            <span>{answer.textAnswer}</span>
                        </label>
                    </p>
                )
            }
            <button
                className="buttonAll answer_form_btn"
                type="submit"
            >{titleBtn}</button>
        </form>
    );
};

export default Answer;

//
// import React, {useState,useEffect} from 'react';
//
// import './answer.scss'
//
// const Answer = ({question, selectedAnswer, titleBtn, onAnswer, onSubmit }) => {
//     const [ans, setAns] = useState('')
//
//     useEffect( () => {
//         setAns(selectedAnswer[question.id])
//     },[question])
//
//     const inputHandler = (e) => {
//         const answer = e.target.value
//         const listAnswers = [question.id, answer ]
//         onAnswer(listAnswers)
//         setAns(answer)
//     }
//
//     const handlerForm = (e) => {
//         e.preventDefault()
//         onSubmit()
//     }
//
//     return (
//         <form onSubmit={handlerForm} className="answer_form">
//
//             {
//                 question.answers.map( answer =>
//                     <p key={answer.id}>
//                         <label>
//                             <input
//                                 name={question.id}
//                                 type="radio"
//                                 value={answer.id}
//                                 checked={ans === answer.id}
//                                 onChange={inputHandler}
//                             />
//                             <span>{answer.textAnswer}</span>
//                         </label>
//                     </p>
//                 )
//             }
//             <button
//                 className="buttonAll answer_form_btn"
//                 type="submit"
//             >{titleBtn}</button>
//         </form>
//     );
// };
//
// export default Answer;