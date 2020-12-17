import React from 'react'
import {Link, useHistory} from "react-router-dom";

import './header.css'

export const Header = () => {
    const history = useHistory();

    return (
        <nav className="navHeader">
            <h1 className="titleHeader">Тестилка “Незнайка”</h1>
            {history.location.pathname === '/reg' ?
                <ul>
                    <li>
                        <Link to={'/auth'}>auth</Link>
                    </li>
                    <li>
                        <Link to={'/reg'}>reg</Link>
                    </li>
                </ul>
                :
                <>
                </>
            }
        </nav>
    )
}