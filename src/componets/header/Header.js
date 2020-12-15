import React from 'react'
import { Link } from "react-router-dom";

import './header.css'

export const Header = () => {
    return (
        <nav className="nav">
            <ul >
                <li>
                    <Link to={'/page2'} >page2</Link>
                </li>
                <li>
                    <Link to={'/'} >Home</Link>
                </li>
            </ul>
        </nav>
    )
}