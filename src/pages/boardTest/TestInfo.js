import React from 'react';

import {format} from 'date-fns';
import {ru} from "date-fns/locale";

const TestInfo = ({item, onClickBtnBegin}) => {

    const onClickBtn = () => {
        onClickBtnBegin()
    }
    return (
        <div className="container">
            <h2 className="board_info_header">{item.nameTest}</h2>

            <table className="striped board_info_table">
                <tbody>
                <tr>
                    <td>Преподователь:</td>
                    <td>{item.nameTeacher}</td>
                </tr>
                <tr>
                    <td>Длительность:</td>
                    <td>{item.timeTest}</td>
                </tr>
                <tr>
                    <td>Количество вопросов:</td>
                    <td>{item.countQuestion}</td>
                </tr>
                <tr>
                    <td>Предмет:</td>
                    <td>{item.subject}</td>
                </tr>
                <tr>
                    <td>Сложность:</td>
                    <td>{item.complexity}</td>
                </tr>
                <tr>
                    <td>Дата создания:</td>
                    <td>{format(+item.dateCreate, 'dd-MM-yyyy', {locale: ru})}</td>
                </tr>
                </tbody>
            </table>

            <button className="buttonAll board_info_btn" onClick={onClickBtn}>Начать тест</button>
        </div>
    );
};

export default TestInfo;