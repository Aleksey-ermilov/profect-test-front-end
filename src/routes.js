import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import BoardTest from "./pages/boardTest/BoardTest";
import Test from "./pages/test/Test";
import TestResult from "./pages/testResult/TestResult";
import EditUser from "./pages/editUser/EditUser";
import StudentStory from "./pages/studentStory/StudentStory";

import Auth from "./pages/auth/Auth";
import Reg from "./pages/reg/Reg";
import Example from "./pages/example/Example";

const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path={'/boardTest'} exact>
                    <BoardTest />
                </Route>
                <Route path={'/test'} exact>
                    <Test />
                </Route>
                <Route path={'/testResult'} exact>
                    <TestResult />
                </Route>
                <Route path={'/editUser'} exact>
                    <EditUser />
                </Route>
                <Route path={'/studentStory'} exact>
                    <StudentStory />
                </Route>
                <Redirect to={'/boardTest'} />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path={'/'} component={Example} exact />
            <Route path={'/auth'} exact>
                <Auth />
            </Route>
            <Route path={'/reg'} exact>
                <Reg />
            </Route>
            <Redirect to={'/auth'} />
        </Switch>
    );
};

export default useRoutes;