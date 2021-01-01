import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";

import avatar from '../../assets/icons/avatar3.png'

import './header.scss'
import M from "materialize-css";

export const Header = () => {
    const history = useHistory();

    useEffect(() => {
        let dropDown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropDown, {});
    }, []);

    return (
        <header className="header">
            <h1 className="header_title">Тестилка “Незнайка”</h1>
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
                    <div
                        className='dropdown-trigger header_avatar_container'
                        data-target='dropdown1'
                    >
                        <div className="header_avatar_container_user_name">User</div>
                        <img className="header_avatar_container_avatar" src={avatar} alt="avatar"/>
                    </div>

                    <ul id='dropdown1' className='dropdown-content'>
                        <li><button >two</button></li>
                        <li className="divider"></li>
                        <li><button >three</button></li>
                        <li><button ><i className="material-icons">view_module</i>four</button></li>
                        <li><button ><i className="material-icons">cloud</i>five</button></li>
                        <li><Link to={'/auth'}>exit</Link></li>
                    </ul>
                </>
            }
        </header>
    )
}