import React,{ useEffect } from 'react';
import { connect } from 'react-redux'

import {useMessage} from "../../hooks/message.hook";

import Loader from "../../componets/loader/Loader";

import {fetchUserStory} from "../../store/redux/user/actionUser";
import TestStory from "./TestStory";

import './studentStory.scss'

const StudentStory = ({userStory,error,fetchUserStory}) => {

    const message = useMessage()

    useEffect( () => {
        fetchUserStory()
    },[])

    useEffect(()=> {
        message(error)
    },[error,message])

    if (!userStory ){
        return <Loader />
    }

    return (
        <div className='story'>
            <h2 className='story_header'>История сдачи</h2>


            <div className="container">

                <table className="striped story_table">
                    <thead>
                    <tr>
                        <th>Название теста</th>
                        <th className={'center'}>Оценка</th>
                        <th className={'center'}>Проценты</th>
                        <th className={'center'}>Дата прохождения</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        userStory.map( item =>
                            <TestStory
                                item={item}
                                key={item._id}
                            />
                        )
                    }
                    </tbody>
                </table>


            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    userStory: state.user.userStory,
    error: state.app.error,
})

const mapDispatchToProps = {
    fetchUserStory,
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentStory);