import { combineReducers } from 'redux'

import {testReducer} from "./test/testReducer";
import {appReducer} from "./app/appReducer";
import {userReducer} from "./user/userReducer";

export const rootReducer = combineReducers({
    test: testReducer,
    app: appReducer,
    user: userReducer
})