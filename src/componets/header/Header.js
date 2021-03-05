import React, { useEffect,useContext } from 'react'
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import {logout} from "../../store/redux/user/actionUser";

import {clearCurrentTest,clearTests} from "../../store/redux/test/actionsTest";

import avatar from '../../assets/icons/avatar3.png'

import './header.scss'
import M from "materialize-css";

const Header = ({token,error,loading,logout,clearCurrentTest,clearTests}) => {
    const history = useHistory();

    useEffect(() => {
        let dropDown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropDown, {constrainWidth:false});
    }, []);

    const logoutHandler = e => {
        e.preventDefault()
        logout()
        clearCurrentTest()
        clearTests()

        setTimeout( () => {
            history.push("/auth")
        },1000)
    }

    return (
        <header className="header">
            <h1 className="header_title">Тестилка “Незнайка”</h1>
            {!token ?
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
                                <Link to={'/boardTest'} >Тесты</Link>
                            </div>
                            <div className="header_dropdown_links_link">
                                <Link to={'/studentStory'} >История сдачи</Link>
                            </div>
                            <div className="header_dropdown_links_link">
                                <Link to={'/editUser'} >Редактировать профиль</Link>
                            </div>
                            <div className="header_dropdown_links_link">
                                <a href="/auth" onClick={logoutHandler}>Выйти</a>
                            </div>
                        </div>
                    </div>
                </>
            }
        </header>
    )
}

const mapStateToProps = state => ({
    loading: state.app.loading,
    error: state.app.error,
    token: state.user.token
})

const mapDispatchToProps = {
    logout,
    clearTests,
    clearCurrentTest
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)