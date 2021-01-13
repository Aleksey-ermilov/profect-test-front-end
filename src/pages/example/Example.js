import React from 'react';

import { observer } from 'mobx-react'
import test from "../../store/test";

import './example.scss'

const Example = observer(() => {

    const handlerBtn1 = () => {
        test.setMap('q','wer')
        test.setMap('w','wer')
    }
    const handlerBtn2 = () => {
        console.log('map',test.showMap)
    }

    return (
        <div>
            <p>example</p>
            <button onClick={handlerBtn1}>add map</button>
            <button onClick={handlerBtn2}>show map</button>
        </div>

    );
}) ;

export default Example;
