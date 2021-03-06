import React from 'react';
import {format} from "date-fns";
import {ru} from "date-fns/locale";

const TestStory = ({item}) => {
    return (
        <tr>
            <td>{item.nameTest}</td>
            <td className={'center'}>{item.appraisal}</td>
            <td className={'center'}>{item.percent}</td>
            <td className={'center'}>{format(+item.time, 'dd-MM-yyyy HH:mm:ss', {locale: ru})}</td>
        </tr>
    );
};

export default TestStory;