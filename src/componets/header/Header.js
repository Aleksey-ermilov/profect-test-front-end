import React, { useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";

import avatar from '../../assets/icons/avatar3.png'

import './header.scss'
import M from "materialize-css";

export const Header = () => {
    const history = useHistory();

    useEffect(() => {
        let dropDown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropDown, {constrainWidth:false});
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

                    <div id='dropdown1' className='dropdown-content header_dropdown'>
                        <h3>User</h3>
                        <hr/>
                        <div className="header_dropdown_links">
                            <div className="header_dropdown_links_link">
                                <Link to={'/studentStory'} >История сдачи</Link>
                            </div>
                            <div className="header_dropdown_links_link">
                                <Link to={'/editUser'} >Редактировать профиль</Link>
                            </div>
                            <div className="header_dropdown_links_link">
                                <Link to={'/auth'}>Выйти</Link>
                            </div>
                        </div>
                    </div>
                </>
            }
        </header>
    )
}