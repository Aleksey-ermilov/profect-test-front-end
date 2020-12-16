import React from 'react'
import { Link } from "react-router-dom";

import './header.css'

export const Header = () => {
    return (
        <nav className="nav">
            <h1 className="titleHeader">Тестилка “Незнайка”</h1>
            <ul >
                <li>
                    <Link to={'/auth'} >auth</Link>
                </li>
                <li>
                    <Link to={'/reg'} >reg</Link>
                </li>
            </ul>
        </nav>
    )
}